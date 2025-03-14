__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    378
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        202
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            18,
            202
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  24,
                  35
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
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
                  35,
                  117
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
                            "name": "child",
                            "optional": false,
                            "range": [
                              91,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 3
                              },
                              "start": {
                                "column": 12,
                                "line": 3
                              }
                            }
                          },
                          "init": {
                            "type": "NewExpression",
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "range": [
                                  105,
                                  109
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                103,
                                104
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 3
                                },
                                "start": {
                                  "column": 24,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              99,
                              110
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            91,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
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
                        87,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    77,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 57,
                      "line": 2
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
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 2
                          },
                          "start": {
                            "column": 32,
                            "line": 2
                          }
                        },
                        "range": [
                          52,
                          75
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 2
                                  }
                                },
                                "range": [
                                  59,
                                  66
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      62,
                                      66
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
                                            63,
                                            65
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 45,
                                              "line": 2
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 2
                                            }
                                          }
                                        },
                                        "range": [
                                          63,
                                          65
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 2
                                          },
                                          "start": {
                                            "column": 43,
                                            "line": 2
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "typeName": {
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
                                        "column": 42,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    61,
                                    66
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 2
                                    }
                                  }
                                }
                              },
                              "range": [
                                55,
                                66
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 2
                                },
                                "start": {
                                  "column": 35,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 2
                              },
                              "start": {
                                "column": 48,
                                "line": 2
                              }
                            },
                            "range": [
                              68,
                              75
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                71,
                                75
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 2
                                },
                                "start": {
                                  "column": 51,
                                  "line": 2
                                }
                              }
                            }
                          },
                          "range": [
                            54,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 2
                            },
                            "start": {
                              "column": 34,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        44,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      37,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              },
              "range": [
                24,
                117
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                "name": "AAA",
                "optional": false,
                "range": [
                  122,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
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
                  125,
                  200
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
                            "name": "child",
                            "optional": false,
                            "range": [
                              174,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "init": {
                            "type": "NewExpression",
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "range": [
                                  188,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                186,
                                187
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
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            174,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        170,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    160,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 42,
                      "line": 5
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
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      },
                      "range": [
                        135,
                        158
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 5
                                },
                                "start": {
                                  "column": 24,
                                  "line": 5
                                }
                              },
                              "range": [
                                142,
                                149
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    145,
                                    149
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
                                          146,
                                          148
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        146,
                                        148
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 5
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 5
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    144,
                                    145
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  144,
                                  149
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 5
                                  }
                                }
                              }
                            },
                            "range": [
                              138,
                              149
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 5
                            },
                            "start": {
                              "column": 33,
                              "line": 5
                            }
                          },
                          "range": [
                            151,
                            158
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              154,
                              158
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 36,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          137,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 5
                          },
                          "start": {
                            "column": 19,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      127,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              },
              "range": [
                122,
                200
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 5
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
              "column": 18,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
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
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          },
          "range": [
            14,
            18
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  15,
                  17
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                15,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          202
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        204,
        313
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            226,
            313
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "child",
                "optional": false,
                "range": [
                  232,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
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
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                },
                "range": [
                  237,
                  244
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      240,
                      244
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
                            241,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          241,
                          243
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 11
                          },
                          "start": {
                            "column": 13,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      239,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 11,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    239,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                232,
                245
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    },
                    "range": [
                      255,
                      262
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          258,
                          262
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
                                259,
                                261
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 12
                                },
                                "start": {
                                  "column": 13,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              259,
                              261
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          257,
                          258
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 12
                          },
                          "start": {
                            "column": 11,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        257,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    251,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                },
                "range": [
                  263,
                  269
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    265,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 19,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                250,
                270
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 13
                      },
                      "start": {
                        "column": 16,
                        "line": 13
                      }
                    },
                    "range": [
                      287,
                      310
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 13
                              },
                              "start": {
                                "column": 23,
                                "line": 13
                              }
                            },
                            "range": [
                              294,
                              301
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  297,
                                  301
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
                                        298,
                                        300
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      298,
                                      300
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 13
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 13
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "range": [
                                  296,
                                  297
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                296,
                                301
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 13
                                },
                                "start": {
                                  "column": 25,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            290,
                            301
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 13
                            },
                            "start": {
                              "column": 19,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 32,
                            "line": 13
                          }
                        },
                        "range": [
                          303,
                          310
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            306,
                            310
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 13
                            },
                            "start": {
                              "column": 35,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        289,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    279,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                275,
                311
              ],
              "loc": {
                "end": {
                  "column": 40,
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
              "column": 22,
              "line": 10
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            221,
            222
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 18,
              "line": 10
            }
          },
          "range": [
            222,
            226
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "range": [
                  223,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 10
                  }
                }
              },
              "out": false,
              "range": [
                223,
                225
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            }
          ]
        },
        "range": [
          211,
          313
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        315,
        376
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            334,
            376
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  340,
                  351
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
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
                  351,
                  374
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    371,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 35,
                      "line": 17
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
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 17
                          },
                          "start": {
                            "column": 29,
                            "line": 17
                          }
                        },
                        "range": [
                          365,
                          369
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "range": [
                              367,
                              369
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 17
                              },
                              "start": {
                                "column": 31,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            367,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 17
                            },
                            "start": {
                              "column": 31,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        359,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 17
                        },
                        "start": {
                          "column": 23,
                          "line": 17
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      352,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 17
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              },
              "range": [
                340,
                374
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 19,
              "line": 16
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            328,
            329
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 18,
              "line": 16
            },
            "start": {
              "column": 14,
              "line": 16
            }
          },
          "range": [
            329,
            333
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  330,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 15,
                    "line": 16
                  }
                }
              },
              "out": false,
              "range": [
                330,
                332
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            }
          ]
        },
        "range": [
          322,
          376
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
