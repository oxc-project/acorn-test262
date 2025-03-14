__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    599
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Readonly",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "name": "T",
              "optional": false,
              "range": [
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 41,
                  "line": 1
                }
              }
            },
            "range": [
              41,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          },
          "range": [
            35,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            30,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          }
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            },
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          },
          "objectType": {
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
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 45,
                  "line": 1
                }
              }
            },
            "range": [
              45,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          },
          "range": [
            45,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        },
        "range": [
          19,
          50
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 1
          },
          "start": {
            "column": 19,
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
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
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
          63,
          98
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                69,
                75
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                76,
                95
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        80,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
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
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 19,
                          "line": 3
                        }
                      },
                      "range": [
                        84,
                        92
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          86,
                          92
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
                      }
                    },
                    "range": [
                      80,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  78,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              69,
              96
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          61,
          62
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        51,
        98
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          124,
          201
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
              "name": "attrs",
              "optional": false,
              "range": [
                130,
                135
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              },
              "range": [
                135,
                148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    145,
                    148
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
                          146,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        146,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    137,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "range": [
                  137,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              130,
              149
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "m",
              "optional": false,
              "range": [
                155,
                156
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                156,
                199
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                169,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 10
                                },
                                "start": {
                                  "column": 8,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "attrs",
                              "optional": false,
                              "range": [
                                174,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 10
                                },
                                "start": {
                                  "column": 13,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              169,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 10
                              },
                              "start": {
                                "column": 8,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "range": [
                              180,
                              186
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 10
                              },
                              "start": {
                                "column": 19,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            169,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          169,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          188,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 10
                          },
                          "start": {
                            "column": 27,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        169,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      169,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
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
                  159,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 9
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
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              }
            },
            "range": [
              155,
              199
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 24,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          106,
          110
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        },
        "range": [
          110,
          123
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
                "name": "A",
                "optional": false,
                "range": [
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
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
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
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
                111,
                112
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
              111,
              122
            ],
            "loc": {
              "end": {
                "column": 22,
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
        100,
        201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          217,
          238
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
                223,
                226
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              },
              "range": [
                227,
                235
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  229,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              223,
              236
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
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 14,
            "line": 14
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
          213,
          216
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        203,
        238
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          276,
          401
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
              "name": "properties",
              "optional": false,
              "range": [
                282,
                292
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              },
              "range": [
                292,
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
                        "name": "P",
                        "optional": false,
                        "range": [
                          303,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 19
                          },
                          "start": {
                            "column": 25,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        303,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 25,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 19
                    },
                    "start": {
                      "column": 24,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    294,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                },
                "range": [
                  294,
                  305
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
            },
            "value": null,
            "range": [
              282,
              306
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                312,
                315
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                315,
                399
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
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
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
                                  344,
                                  347
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 22
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "AssignmentPattern",
                                "range": [
                                  344,
                                  352
                                ],
                                "decorators": [],
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "range": [
                                    344,
                                    347
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 22
                                    }
                                  }
                                },
                                "optional": false,
                                "right": {
                                  "type": "Literal",
                                  "raw": "42",
                                  "value": 42,
                                  "range": [
                                    350,
                                    352
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 22
                                    }
                                  }
                                },
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                344,
                                352
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 22
                                },
                                "start": {
                                  "column": 16,
                                  "line": 22
                                }
                              }
                            }
                          ],
                          "range": [
                            342,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 22
                            },
                            "start": {
                              "column": 14,
                              "line": 22
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              357,
                              361
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 22
                              },
                              "start": {
                                "column": 29,
                                "line": 22
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "properties",
                            "optional": false,
                            "range": [
                              362,
                              372
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 22
                              },
                              "start": {
                                "column": 34,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            357,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 22
                            },
                            "start": {
                              "column": 29,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          342,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 22
                          },
                          "start": {
                            "column": 14,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      336,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        389,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 15,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      382,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 21
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
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                },
                "range": [
                  317,
                  325
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    319,
                    325
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
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              }
            },
            "range": [
              312,
              399
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 36,
            "line": 18
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooClass",
        "optional": false,
        "range": [
          246,
          254
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 18
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 18
          },
          "start": {
            "column": 14,
            "line": 18
          }
        },
        "range": [
          254,
          275
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
                "name": "Foo",
                "optional": false,
                "range": [
                  265,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 25,
                    "line": 18
                  }
                }
              },
              "range": [
                265,
                268
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  271,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 18
                  },
                  "start": {
                    "column": 31,
                    "line": 18
                  }
                }
              },
              "range": [
                271,
                274
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 18
                },
                "start": {
                  "column": 31,
                  "line": 18
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                255,
                256
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              255,
              274
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        240,
        401
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          428,
          599
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
              "name": "attrs",
              "optional": false,
              "range": [
                434,
                439
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                  "column": 22,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              },
              "range": [
                439,
                452
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    449,
                    452
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
                          450,
                          451
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 28
                          },
                          "start": {
                            "column": 20,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        450,
                        451
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 28
                        },
                        "start": {
                          "column": 20,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 28
                    },
                    "start": {
                      "column": 19,
                      "line": 28
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    441,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 11,
                      "line": 28
                    }
                  }
                },
                "range": [
                  441,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 28
                  }
                }
              }
            },
            "value": null,
            "range": [
              434,
              453
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
              "name": "m",
              "optional": false,
              "range": [
                459,
                460
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
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
                460,
                597
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              480,
                              484
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 31
                              },
                              "start": {
                                "column": 15,
                                "line": 31
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "attrs",
                            "optional": false,
                            "range": [
                              485,
                              490
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 31
                              },
                              "start": {
                                "column": 20,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            480,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 31
                            },
                            "start": {
                              "column": 15,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "range": [
                            491,
                            497
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 31
                            },
                            "start": {
                              "column": 26,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          480,
                          497
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 31
                          },
                          "start": {
                            "column": 15,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        480,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 31
                        },
                        "start": {
                          "column": 15,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      473,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  463,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 30
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
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              }
            },
            "range": [
              459,
              597
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 25,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          409,
          414
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 27
          },
          "start": {
            "column": 11,
            "line": 27
          }
        },
        "range": [
          414,
          427
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
                "name": "A",
                "optional": false,
                "range": [
                  425,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 27
                  },
                  "start": {
                    "column": 22,
                    "line": 27
                  }
                }
              },
              "range": [
                425,
                426
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
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
                415,
                416
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              415,
              426
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        403,
        599
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
