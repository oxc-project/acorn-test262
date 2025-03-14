__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    20,
    400
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          37,
          53
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                43,
                47
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
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
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "range": [
                  49,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              43,
              51
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "range": [
          30,
          33
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
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
          33,
          36
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
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        20,
        53
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          77,
          118
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "range": [
                83,
                85
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              },
              "range": [
                85,
                104
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    96,
                    104
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          100,
                          103
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
                                101,
                                102
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              101,
                              102
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "range": [
                          97,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 18,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        97,
                        103
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
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "range": [
                    87,
                    96
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
                "range": [
                  87,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              83,
              105
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "range": [
                110,
                112
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                112,
                115
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    114,
                    115
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
                  114,
                  115
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
              }
            },
            "range": [
              110,
              116
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 23,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "range": [
          64,
          73
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 6
          }
        },
        "range": [
          73,
          76
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
                74,
                75
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        54,
        118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "foo",
        "optional": false,
        "range": [
          136,
          139
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
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
                "column": 52,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            },
            "range": [
              141,
              171
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                },
                "range": [
                  146,
                  171
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      158,
                      171
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            162,
                            170
                          ],
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                163,
                                169
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 10
                                },
                                "start": {
                                  "column": 44,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 10
                            },
                            "start": {
                              "column": 43,
                              "line": 10
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Ref",
                          "optional": false,
                          "range": [
                            159,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 10
                            },
                            "start": {
                              "column": 40,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          159,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 10
                          },
                          "start": {
                            "column": 40,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 10
                      },
                      "start": {
                        "column": 39,
                        "line": 10
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "range": [
                      149,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 30,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    149,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 30,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                143,
                171
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            }
          },
          "range": [
            140,
            171
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 10
            },
            "start": {
              "column": 21,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 10
          },
          "start": {
            "column": 53,
            "line": 10
          }
        },
        "range": [
          172,
          178
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            174,
            178
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 10
            },
            "start": {
              "column": 55,
              "line": 10
            }
          }
        }
      },
      "range": [
        119,
        179
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              },
              "range": [
                185,
                215
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  },
                  "range": [
                    190,
                    215
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        202,
                        215
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              206,
                              214
                            ],
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  207,
                                  213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 11
                              },
                              "start": {
                                "column": 26,
                                "line": 11
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Ref",
                            "optional": false,
                            "range": [
                              203,
                              206
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 11
                              },
                              "start": {
                                "column": 23,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            203,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 11
                            },
                            "start": {
                              "column": 23,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Container",
                      "optional": false,
                      "range": [
                        193,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      193,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  187,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              184,
              215
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            184,
            215
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        180,
        216
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "a",
            "optional": false,
            "range": [
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
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
            217,
            220
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          217,
          223
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        217,
        224
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 12
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
            "type": "ReturnStatement",
            "argument": {
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
                      294,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 17
                      },
                      "start": {
                        "column": 10,
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
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      299,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    294,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                293,
                305
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "range": [
              286,
              306
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          }
        ],
        "range": [
          282,
          308
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 35,
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
        "name": "test",
        "optional": false,
        "range": [
          256,
          260
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 16
          },
          "start": {
            "column": 15,
            "line": 16
          }
        },
        "range": [
          262,
          281
        ],
        "typeAnnotation": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                271,
                276
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
              271,
              276
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
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              266,
              267
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 19,
                "line": 16
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                279,
                280
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            },
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 32,
                "line": 16
              }
            }
          },
          "range": [
            264,
            281
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 16
            },
            "start": {
              "column": 17,
              "line": 16
            }
          }
        }
      },
      "range": [
        247,
        308
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
            "name": "foo",
            "optional": false,
            "range": [
              337,
              340
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    345,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    350,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  }
                },
                "range": [
                  345,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 14,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              343,
              355
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 12,
                "line": 22
              }
            }
          },
          "range": [
            337,
            355
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        331,
        356
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "x",
            "optional": false,
            "range": [
              363,
              364
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                389,
                398
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 23
                },
                "start": {
                  "column": 32,
                  "line": 23
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          371,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          375,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 23
                          },
                          "start": {
                            "column": 18,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        371,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        381,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 24,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      370,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  368,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              367,
              398
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 23
              },
              "start": {
                "column": 10,
                "line": 23
              }
            }
          },
          "range": [
            363,
            398
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        357,
        399
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
