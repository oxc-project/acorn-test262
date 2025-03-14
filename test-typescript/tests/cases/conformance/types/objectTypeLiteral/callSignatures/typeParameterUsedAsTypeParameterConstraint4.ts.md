__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    100,
    1280
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          137,
          233
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
              "name": "z",
              "optional": false,
              "range": [
                143,
                144
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                144,
                147
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "range": [
                    146,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  146,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "value": null,
            "range": [
              143,
              148
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "foo",
              "optional": false,
              "range": [
                162,
                165
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
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
                165,
                231
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
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 7
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            },
                            "range": [
                              203,
                              206
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  205,
                                  206
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
                                205,
                                206
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
                          },
                          "range": [
                            202,
                            206
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          202,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      198,
                      207
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
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        223,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      216,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  188,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 6
                  }
                }
              },
              "declare": false,
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
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    },
                    "range": [
                      180,
                      183
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "range": [
                          182,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 24,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        182,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                    179,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                },
                "range": [
                  184,
                  187
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      186,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    186,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                },
                "range": [
                  165,
                  178
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
                        "name": "V",
                        "optional": false,
                        "range": [
                          176,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        176,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "range": [
                        166,
                        167
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
                      166,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "range": [
              162,
              231
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
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
            "column": 37,
            "line": 4
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
          106,
          107
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        },
        "range": [
          107,
          136
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
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
                "name": "T",
                "optional": false,
                "range": [
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
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
                111,
                112
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
            "out": false,
            "range": [
              111,
              122
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
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
                "name": "U",
                "optional": false,
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              },
              "range": [
                134,
                135
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                124,
                125
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              124,
              135
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        100,
        233
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          276,
          349
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
                282,
                283
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                283,
                286
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    285,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 7,
                      "line": 13
                    }
                  }
                },
                "range": [
                  285,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              282,
              287
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                292,
                293
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                293,
                296
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    295,
                    296
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
                  295,
                  296
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
              }
            },
            "range": [
              292,
              297
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                302,
                303
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                  "column": 8,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                303,
                306
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "range": [
                    305,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  305,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              302,
              307
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                321,
                324
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
            "kind": "method",
            "optional": false,
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
                      "column": 25,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  },
                  "range": [
                    339,
                    342
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "range": [
                        341,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 16
                        },
                        "start": {
                          "column": 24,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      341,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  338,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 21,
                    "line": 16
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 26,
                  "line": 16
                }
              },
              "range": [
                343,
                346
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    345,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                },
                "range": [
                  345,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 28,
                    "line": 16
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              },
              "range": [
                324,
                337
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
                      "name": "V",
                      "optional": false,
                      "range": [
                        335,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 18,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      335,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "range": [
                      325,
                      326
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
                  "out": false,
                  "range": [
                    325,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                }
              ]
            },
            "range": [
              321,
              347
            ],
            "loc": {
              "end": {
                "column": 30,
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
            "column": 41,
            "line": 12
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
          245,
          246
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 12
          }
        },
        "range": [
          246,
          275
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
                247,
                248
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              247,
              248
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
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
                "name": "T",
                "optional": false,
                "range": [
                  260,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "range": [
                260,
                261
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
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
                250,
                251
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              250,
              261
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 15,
                "line": 12
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
                "name": "U",
                "optional": false,
                "range": [
                  273,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                }
              },
              "range": [
                273,
                274
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 12
                },
                "start": {
                  "column": 38,
                  "line": 12
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                263,
                264
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              263,
              274
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        235,
        349
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
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
                              541,
                              542
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 22
                              },
                              "start": {
                                "column": 12,
                                "line": 22
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              545,
                              546
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
                          "range": [
                            541,
                            546
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          541,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            567,
                            568
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 23
                            },
                            "start": {
                              "column": 19,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          560,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      527,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 62,
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
                    "name": "baz",
                    "optional": false,
                    "range": [
                      482,
                      485
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
                            "column": 51,
                            "line": 21
                          },
                          "start": {
                            "column": 48,
                            "line": 21
                          }
                        },
                        "range": [
                          513,
                          516
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "range": [
                              515,
                              516
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 21
                              },
                              "start": {
                                "column": 50,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            515,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 21
                            },
                            "start": {
                              "column": 50,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        512,
                        516
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 21
                        },
                        "start": {
                          "column": 47,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 21
                          },
                          "start": {
                            "column": 54,
                            "line": 21
                          }
                        },
                        "range": [
                          519,
                          522
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "range": [
                              521,
                              522
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 21
                              },
                              "start": {
                                "column": 56,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            521,
                            522
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 21
                            },
                            "start": {
                              "column": 56,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        518,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 21
                        },
                        "start": {
                          "column": 53,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 21
                      },
                      "start": {
                        "column": 58,
                        "line": 21
                      }
                    },
                    "range": [
                      523,
                      526
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          525,
                          526
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 21
                          },
                          "start": {
                            "column": 60,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        525,
                        526
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 21
                        },
                        "start": {
                          "column": 60,
                          "line": 21
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    },
                    "range": [
                      485,
                      511
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
                            "name": "W",
                            "optional": false,
                            "range": [
                              496,
                              497
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 21
                              },
                              "start": {
                                "column": 31,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            496,
                            497
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 21
                            },
                            "start": {
                              "column": 31,
                              "line": 21
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "range": [
                            486,
                            487
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 21
                            },
                            "start": {
                              "column": 21,
                              "line": 21
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          486,
                          497
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 21
                          },
                          "start": {
                            "column": 21,
                            "line": 21
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
                            "name": "V",
                            "optional": false,
                            "range": [
                              509,
                              510
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 21
                              },
                              "start": {
                                "column": 44,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            509,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 21
                            },
                            "start": {
                              "column": 44,
                              "line": 21
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "range": [
                            499,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 21
                            },
                            "start": {
                              "column": 34,
                              "line": 21
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          499,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 21
                          },
                          "start": {
                            "column": 34,
                            "line": 21
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    473,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                454,
                585
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 48,
                  "line": 20
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                419,
                422
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 20
                },
                "start": {
                  "column": 44,
                  "line": 20
                }
              },
              "range": [
                450,
                453
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    452,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 20
                    },
                    "start": {
                      "column": 46,
                      "line": 20
                    }
                  }
                },
                "range": [
                  452,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 20
                  },
                  "start": {
                    "column": 46,
                    "line": 20
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              },
              "range": [
                422,
                448
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        433,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 20
                        },
                        "start": {
                          "column": 27,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      433,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 27,
                        "line": 20
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      423,
                      424
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
                  },
                  "out": false,
                  "range": [
                    423,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        446,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 20
                        },
                        "start": {
                          "column": 40,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      446,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 20
                      },
                      "start": {
                        "column": 40,
                        "line": 20
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "range": [
                      436,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 20
                      },
                      "start": {
                        "column": 30,
                        "line": 20
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    436,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 20
                    },
                    "start": {
                      "column": 30,
                      "line": 20
                    }
                  }
                }
              ]
            },
            "range": [
              410,
              585
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          395,
          587
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 44,
            "line": 19
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
          360,
          363
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
                "column": 33,
                "line": 19
              },
              "start": {
                "column": 30,
                "line": 19
              }
            },
            "range": [
              381,
              384
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  383,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 19
                  },
                  "start": {
                    "column": 32,
                    "line": 19
                  }
                }
              },
              "range": [
                383,
                384
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 19
                },
                "start": {
                  "column": 32,
                  "line": 19
                }
              }
            }
          },
          "range": [
            380,
            384
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 19
            },
            "start": {
              "column": 29,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 19
              },
              "start": {
                "column": 36,
                "line": 19
              }
            },
            "range": [
              387,
              390
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  389,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 19
                  },
                  "start": {
                    "column": 38,
                    "line": 19
                  }
                }
              },
              "range": [
                389,
                390
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 19
                },
                "start": {
                  "column": 38,
                  "line": 19
                }
              }
            }
          },
          "range": [
            386,
            390
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 19
            },
            "start": {
              "column": 35,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 19
          },
          "start": {
            "column": 40,
            "line": 19
          }
        },
        "range": [
          391,
          394
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "range": [
              393,
              394
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 19
              },
              "start": {
                "column": 42,
                "line": 19
              }
            }
          },
          "range": [
            393,
            394
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 19
            },
            "start": {
              "column": 42,
              "line": 19
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 19
          }
        },
        "range": [
          363,
          379
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
                364,
                365
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              364,
              365
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
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
                "name": "T",
                "optional": false,
                "range": [
                  377,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 19
                  },
                  "start": {
                    "column": 26,
                    "line": 19
                  }
                }
              },
              "range": [
                377,
                378
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 26,
                  "line": 19
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
                367,
                368
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              367,
              378
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 16,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        351,
        587
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 19
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
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
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
                              780,
                              781
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 31
                              },
                              "start": {
                                "column": 12,
                                "line": 31
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              784,
                              785
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 31
                              },
                              "start": {
                                "column": 16,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            780,
                            785
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          780,
                          786
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            806,
                            807
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 32
                            },
                            "start": {
                              "column": 19,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          799,
                          808
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 32
                          },
                          "start": {
                            "column": 12,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "range": [
                      766,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 33
                      },
                      "start": {
                        "column": 62,
                        "line": 30
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      721,
                      724
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 30
                      },
                      "start": {
                        "column": 17,
                        "line": 30
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
                            "column": 51,
                            "line": 30
                          },
                          "start": {
                            "column": 48,
                            "line": 30
                          }
                        },
                        "range": [
                          752,
                          755
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "range": [
                              754,
                              755
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 30
                              },
                              "start": {
                                "column": 50,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            754,
                            755
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 30
                            },
                            "start": {
                              "column": 50,
                              "line": 30
                            }
                          }
                        }
                      },
                      "range": [
                        751,
                        755
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 30
                        },
                        "start": {
                          "column": 47,
                          "line": 30
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 30
                          },
                          "start": {
                            "column": 54,
                            "line": 30
                          }
                        },
                        "range": [
                          758,
                          761
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "range": [
                              760,
                              761
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 30
                              },
                              "start": {
                                "column": 56,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            760,
                            761
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 30
                            },
                            "start": {
                              "column": 56,
                              "line": 30
                            }
                          }
                        }
                      },
                      "range": [
                        757,
                        761
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 30
                        },
                        "start": {
                          "column": 53,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 30
                      },
                      "start": {
                        "column": 58,
                        "line": 30
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
                            "column": 61,
                            "line": 30
                          },
                          "start": {
                            "column": 60,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        764,
                        765
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 30
                        },
                        "start": {
                          "column": 60,
                          "line": 30
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 30
                      },
                      "start": {
                        "column": 20,
                        "line": 30
                      }
                    },
                    "range": [
                      724,
                      750
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
                            "name": "W",
                            "optional": false,
                            "range": [
                              735,
                              736
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 30
                              },
                              "start": {
                                "column": 31,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            735,
                            736
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 30
                            },
                            "start": {
                              "column": 31,
                              "line": 30
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "range": [
                            725,
                            726
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 30
                            },
                            "start": {
                              "column": 21,
                              "line": 30
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          725,
                          736
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 30
                          },
                          "start": {
                            "column": 21,
                            "line": 30
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
                            "name": "V",
                            "optional": false,
                            "range": [
                              748,
                              749
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 30
                              },
                              "start": {
                                "column": 44,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            748,
                            749
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 30
                            },
                            "start": {
                              "column": 44,
                              "line": 30
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "range": [
                            738,
                            739
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 30
                            },
                            "start": {
                              "column": 34,
                              "line": 30
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          738,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 30
                          },
                          "start": {
                            "column": 34,
                            "line": 30
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    712,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                693,
                824
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 48,
                  "line": 29
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                658,
                661
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 29
                },
                "start": {
                  "column": 44,
                  "line": 29
                }
              },
              "range": [
                689,
                692
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    691,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 29
                    },
                    "start": {
                      "column": 46,
                      "line": 29
                    }
                  }
                },
                "range": [
                  691,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 29
                  },
                  "start": {
                    "column": 46,
                    "line": 29
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
                }
              },
              "range": [
                661,
                687
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        672,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 29
                        },
                        "start": {
                          "column": 27,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      672,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 27,
                        "line": 29
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      662,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 17,
                        "line": 29
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    662,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 29
                    },
                    "start": {
                      "column": 17,
                      "line": 29
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        685,
                        686
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 29
                        },
                        "start": {
                          "column": 40,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      685,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 29
                      },
                      "start": {
                        "column": 40,
                        "line": 29
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "range": [
                      675,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 29
                      },
                      "start": {
                        "column": 30,
                        "line": 29
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    675,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 29
                    },
                    "start": {
                      "column": 30,
                      "line": 29
                    }
                  }
                }
              ]
            },
            "range": [
              649,
              824
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          634,
          826
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 45,
            "line": 28
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          598,
          602
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
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
                "column": 34,
                "line": 28
              },
              "start": {
                "column": 31,
                "line": 28
              }
            },
            "range": [
              620,
              623
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  622,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 28
                  },
                  "start": {
                    "column": 33,
                    "line": 28
                  }
                }
              },
              "range": [
                622,
                623
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 28
                },
                "start": {
                  "column": 33,
                  "line": 28
                }
              }
            }
          },
          "range": [
            619,
            623
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 28
            },
            "start": {
              "column": 30,
              "line": 28
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 28
              },
              "start": {
                "column": 37,
                "line": 28
              }
            },
            "range": [
              626,
              629
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  628,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 28
                  },
                  "start": {
                    "column": 39,
                    "line": 28
                  }
                }
              },
              "range": [
                628,
                629
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 28
                },
                "start": {
                  "column": 39,
                  "line": 28
                }
              }
            }
          },
          "range": [
            625,
            629
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 28
            },
            "start": {
              "column": 36,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 28
          },
          "start": {
            "column": 41,
            "line": 28
          }
        },
        "range": [
          630,
          633
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "range": [
              632,
              633
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 28
              },
              "start": {
                "column": 43,
                "line": 28
              }
            }
          },
          "range": [
            632,
            633
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 28
            },
            "start": {
              "column": 43,
              "line": 28
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 28
          },
          "start": {
            "column": 13,
            "line": 28
          }
        },
        "range": [
          602,
          618
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
                "name": "T",
                "optional": false,
                "range": [
                  613,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              },
              "range": [
                613,
                614
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
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
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              603,
              614
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 14,
                "line": 28
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
              "name": "T",
              "optional": false,
              "range": [
                616,
                617
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 28
                },
                "start": {
                  "column": 27,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              616,
              617
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 28
              },
              "start": {
                "column": 27,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        589,
        826
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "f3",
            "optional": false,
            "range": [
              832,
              834
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
                              "name": "g",
                              "optional": false,
                              "range": [
                                949,
                                950
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 39
                                },
                                "start": {
                                  "column": 12,
                                  "line": 39
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
                                          1012,
                                          1013
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 13,
                                            "line": 40
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 40
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          1016,
                                          1017
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
                                      "range": [
                                        1012,
                                        1017
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 40
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 40
                                        }
                                      }
                                    },
                                    "range": [
                                      1012,
                                      1018
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 40
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 40
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        1038,
                                        1039
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 41
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 41
                                        }
                                      }
                                    },
                                    "range": [
                                      1031,
                                      1040
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 41
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 41
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  998,
                                  1050
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 39
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 39
                                      }
                                    },
                                    "range": [
                                      981,
                                      984
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "range": [
                                          983,
                                          984
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 39
                                          }
                                        }
                                      },
                                      "range": [
                                        983,
                                        984
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 39
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    980,
                                    984
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 39
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 39
                                      }
                                    },
                                    "range": [
                                      987,
                                      990
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "range": [
                                          989,
                                          990
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 53,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 39
                                          }
                                        }
                                      },
                                      "range": [
                                        989,
                                        990
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 52,
                                          "line": 39
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    986,
                                    990
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 39
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 39
                                  }
                                },
                                "range": [
                                  991,
                                  994
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      993,
                                      994
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 39
                                      }
                                    }
                                  },
                                  "range": [
                                    993,
                                    994
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 39
                                    }
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 39
                                  }
                                },
                                "range": [
                                  953,
                                  979
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
                                        "name": "W",
                                        "optional": false,
                                        "range": [
                                          964,
                                          965
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 39
                                          }
                                        }
                                      },
                                      "range": [
                                        964,
                                        965
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 39
                                        }
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "range": [
                                        954,
                                        955
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 39
                                        }
                                      }
                                    },
                                    "out": false,
                                    "range": [
                                      954,
                                      965
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 39
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
                                        "name": "V",
                                        "optional": false,
                                        "range": [
                                          977,
                                          978
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 40,
                                            "line": 39
                                          }
                                        }
                                      },
                                      "range": [
                                        977,
                                        978
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 39
                                        }
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "range": [
                                        967,
                                        968
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 39
                                        }
                                      }
                                    },
                                    "out": false,
                                    "range": [
                                      967,
                                      978
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 39
                                      }
                                    }
                                  }
                                ]
                              },
                              "range": [
                                953,
                                1050
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 42
                                },
                                "start": {
                                  "column": 16,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              949,
                              1050
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 42
                              },
                              "start": {
                                "column": 12,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          945,
                          1050
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      926,
                      1056
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 43
                      },
                      "start": {
                        "column": 55,
                        "line": 38
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      884,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    }
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 38
                          },
                          "start": {
                            "column": 44,
                            "line": 38
                          }
                        },
                        "range": [
                          915,
                          918
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "range": [
                              917,
                              918
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 38
                              },
                              "start": {
                                "column": 46,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            917,
                            918
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 38
                            },
                            "start": {
                              "column": 46,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        914,
                        918
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 38
                        },
                        "start": {
                          "column": 43,
                          "line": 38
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 38
                          },
                          "start": {
                            "column": 50,
                            "line": 38
                          }
                        },
                        "range": [
                          921,
                          924
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "range": [
                              923,
                              924
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 38
                              },
                              "start": {
                                "column": 52,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            923,
                            924
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 38
                            },
                            "start": {
                              "column": 52,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        920,
                        924
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 38
                        },
                        "start": {
                          "column": 49,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 38
                      },
                      "start": {
                        "column": 16,
                        "line": 38
                      }
                    },
                    "range": [
                      887,
                      913
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
                            "name": "T",
                            "optional": false,
                            "range": [
                              898,
                              899
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 38
                              },
                              "start": {
                                "column": 27,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            898,
                            899
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 38
                            },
                            "start": {
                              "column": 27,
                              "line": 38
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            888,
                            889
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 38
                            },
                            "start": {
                              "column": 17,
                              "line": 38
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          888,
                          899
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 38
                          },
                          "start": {
                            "column": 17,
                            "line": 38
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
                            "name": "U",
                            "optional": false,
                            "range": [
                              911,
                              912
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 38
                              },
                              "start": {
                                "column": 40,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            911,
                            912
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 38
                            },
                            "start": {
                              "column": 40,
                              "line": 38
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "range": [
                            901,
                            902
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 38
                            },
                            "start": {
                              "column": 30,
                              "line": 38
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          901,
                          912
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 38
                          },
                          "start": {
                            "column": 30,
                            "line": 38
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    875,
                    1056
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                869,
                1058
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 44
                },
                "start": {
                  "column": 41,
                  "line": 37
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
                      "column": 30,
                      "line": 37
                    },
                    "start": {
                      "column": 27,
                      "line": 37
                    }
                  },
                  "range": [
                    855,
                    858
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        857,
                        858
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 37
                        },
                        "start": {
                          "column": 29,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      857,
                      858
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 37
                      },
                      "start": {
                        "column": 29,
                        "line": 37
                      }
                    }
                  }
                },
                "range": [
                  854,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 37
                  },
                  "start": {
                    "column": 26,
                    "line": 37
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 37
                    },
                    "start": {
                      "column": 33,
                      "line": 37
                    }
                  },
                  "range": [
                    861,
                    864
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        863,
                        864
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 37
                        },
                        "start": {
                          "column": 35,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      863,
                      864
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 37
                      },
                      "start": {
                        "column": 35,
                        "line": 37
                      }
                    }
                  }
                },
                "range": [
                  860,
                  864
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 37
                  },
                  "start": {
                    "column": 32,
                    "line": 37
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              },
              "range": [
                837,
                853
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
                      838,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 37
                      },
                      "start": {
                        "column": 10,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    838,
                    839
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 37
                    },
                    "start": {
                      "column": 10,
                      "line": 37
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        851,
                        852
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 37
                        },
                        "start": {
                          "column": 23,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      851,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 37
                      },
                      "start": {
                        "column": 23,
                        "line": 37
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
                      841,
                      842
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    841,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 37
                    },
                    "start": {
                      "column": 13,
                      "line": 37
                    }
                  }
                }
              ]
            },
            "range": [
              837,
              1058
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 44
              },
              "start": {
                "column": 9,
                "line": 37
              }
            }
          },
          "range": [
            832,
            1058
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        828,
        1058
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "f4",
            "optional": false,
            "range": [
              1064,
              1066
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
                              "name": "g",
                              "optional": false,
                              "range": [
                                1171,
                                1172
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 48
                                },
                                "start": {
                                  "column": 12,
                                  "line": 48
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
                                          1234,
                                          1235
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 13,
                                            "line": 49
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 49
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          1238,
                                          1239
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 49
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 49
                                          }
                                        }
                                      },
                                      "range": [
                                        1234,
                                        1239
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 49
                                        }
                                      }
                                    },
                                    "range": [
                                      1234,
                                      1240
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 49
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        1260,
                                        1261
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 50
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 50
                                        }
                                      }
                                    },
                                    "range": [
                                      1253,
                                      1262
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 50
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1220,
                                  1272
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 48
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 48
                                      }
                                    },
                                    "range": [
                                      1203,
                                      1206
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "range": [
                                          1205,
                                          1206
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 48
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 48
                                          }
                                        }
                                      },
                                      "range": [
                                        1205,
                                        1206
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 48
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1202,
                                    1206
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 48
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 48
                                      }
                                    },
                                    "range": [
                                      1209,
                                      1212
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "range": [
                                          1211,
                                          1212
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 53,
                                            "line": 48
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 48
                                          }
                                        }
                                      },
                                      "range": [
                                        1211,
                                        1212
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 52,
                                          "line": 48
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1208,
                                    1212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 48
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 48
                                  }
                                },
                                "range": [
                                  1213,
                                  1216
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      1215,
                                      1216
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 57,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 48
                                      }
                                    }
                                  },
                                  "range": [
                                    1215,
                                    1216
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 48
                                    }
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 48
                                  }
                                },
                                "range": [
                                  1175,
                                  1201
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
                                        "name": "W",
                                        "optional": false,
                                        "range": [
                                          1186,
                                          1187
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 48
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 48
                                          }
                                        }
                                      },
                                      "range": [
                                        1186,
                                        1187
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 48
                                        }
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "range": [
                                        1176,
                                        1177
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 48
                                        }
                                      }
                                    },
                                    "out": false,
                                    "range": [
                                      1176,
                                      1187
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 48
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
                                        "name": "V",
                                        "optional": false,
                                        "range": [
                                          1199,
                                          1200
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 48
                                          },
                                          "start": {
                                            "column": 40,
                                            "line": 48
                                          }
                                        }
                                      },
                                      "range": [
                                        1199,
                                        1200
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 48
                                        }
                                      }
                                    },
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "range": [
                                        1189,
                                        1190
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 48
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 48
                                        }
                                      }
                                    },
                                    "out": false,
                                    "range": [
                                      1189,
                                      1200
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 48
                                      }
                                    }
                                  }
                                ]
                              },
                              "range": [
                                1175,
                                1272
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 51
                                },
                                "start": {
                                  "column": 16,
                                  "line": 48
                                }
                              }
                            },
                            "range": [
                              1171,
                              1272
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 51
                              },
                              "start": {
                                "column": 12,
                                "line": 48
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          1167,
                          1272
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 51
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "range": [
                      1157,
                      1278
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 52
                      },
                      "start": {
                        "column": 45,
                        "line": 47
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      1125,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 47
                      },
                      "start": {
                        "column": 13,
                        "line": 47
                      }
                    }
                  },
                  "params": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 47
                      },
                      "start": {
                        "column": 16,
                        "line": 47
                      }
                    },
                    "range": [
                      1128,
                      1154
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
                            "name": "T",
                            "optional": false,
                            "range": [
                              1139,
                              1140
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 47
                              },
                              "start": {
                                "column": 27,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1139,
                            1140
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 47
                            },
                            "start": {
                              "column": 27,
                              "line": 47
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            1129,
                            1130
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 47
                            },
                            "start": {
                              "column": 17,
                              "line": 47
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          1129,
                          1140
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 47
                          },
                          "start": {
                            "column": 17,
                            "line": 47
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
                            "name": "U",
                            "optional": false,
                            "range": [
                              1152,
                              1153
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 47
                              },
                              "start": {
                                "column": 40,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1152,
                            1153
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 47
                            },
                            "start": {
                              "column": 40,
                              "line": 47
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "range": [
                            1142,
                            1143
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 47
                            },
                            "start": {
                              "column": 30,
                              "line": 47
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          1142,
                          1153
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 47
                          },
                          "start": {
                            "column": 30,
                            "line": 47
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    1116,
                    1278
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 52
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1101,
                1280
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 53
                },
                "start": {
                  "column": 41,
                  "line": 46
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
                      "column": 30,
                      "line": 46
                    },
                    "start": {
                      "column": 27,
                      "line": 46
                    }
                  },
                  "range": [
                    1087,
                    1090
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        1089,
                        1090
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 46
                        },
                        "start": {
                          "column": 29,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1089,
                      1090
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 46
                      },
                      "start": {
                        "column": 29,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  1086,
                  1090
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 46
                  },
                  "start": {
                    "column": 26,
                    "line": 46
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 46
                    },
                    "start": {
                      "column": 33,
                      "line": 46
                    }
                  },
                  "range": [
                    1093,
                    1096
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "range": [
                        1095,
                        1096
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 46
                        },
                        "start": {
                          "column": 35,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1095,
                      1096
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 46
                      },
                      "start": {
                        "column": 35,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  1092,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 46
                  },
                  "start": {
                    "column": 32,
                    "line": 46
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              },
              "range": [
                1069,
                1085
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        1080,
                        1081
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 46
                        },
                        "start": {
                          "column": 20,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1080,
                      1081
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 46
                      },
                      "start": {
                        "column": 20,
                        "line": 46
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
                      1070,
                      1071
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 46
                      },
                      "start": {
                        "column": 10,
                        "line": 46
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1070,
                    1081
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      1083,
                      1084
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 46
                      },
                      "start": {
                        "column": 23,
                        "line": 46
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1083,
                    1084
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 46
                    },
                    "start": {
                      "column": 23,
                      "line": 46
                    }
                  }
                }
              ]
            },
            "range": [
              1069,
              1280
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 53
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          },
          "range": [
            1064,
            1280
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1060,
        1280
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
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
      "column": 1,
      "line": 53
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
