__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    759
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "direct",
        "optional": false,
        "range": [
          73,
          79
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
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
                "column": 52,
                "line": 2
              },
              "start": {
                "column": 43,
                "line": 2
              }
            },
            "range": [
              99,
              108
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      101,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 45,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    101,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 2
                    },
                    "start": {
                      "column": 45,
                      "line": 2
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
                      "name": "A",
                      "optional": false,
                      "range": [
                        105,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 2
                        },
                        "start": {
                          "column": 49,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      105,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 49,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    105,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 2
                    },
                    "start": {
                      "column": 49,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                101,
                108
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 2
                },
                "start": {
                  "column": 45,
                  "line": 2
                }
              }
            }
          },
          "range": [
            98,
            108
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 2
            },
            "start": {
              "column": 42,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 72,
            "line": 2
          },
          "start": {
            "column": 53,
            "line": 2
          }
        },
        "range": [
          109,
          128
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              117,
              128
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    118,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 2
                    },
                    "start": {
                      "column": 62,
                      "line": 2
                    }
                  }
                },
                "range": [
                  118,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 62,
                    "line": 2
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  121,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 2
                  },
                  "start": {
                    "column": 65,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 2
              },
              "start": {
                "column": 61,
                "line": 2
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              111,
              117
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 2
              },
              "start": {
                "column": 55,
                "line": 2
              }
            }
          },
          "range": [
            111,
            128
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 2
            },
            "start": {
              "column": 55,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        },
        "range": [
          79,
          97
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                90,
                96
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 2
                },
                "start": {
                  "column": 34,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              80,
              96
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        56,
        128
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "nested",
        "optional": false,
        "range": [
          146,
          152
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
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
                "column": 58,
                "line": 3
              },
              "start": {
                "column": 43,
                "line": 3
              }
            },
            "range": [
              172,
              187
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
                    "name": "fields",
                    "optional": false,
                    "range": [
                      176,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 3
                      },
                      "start": {
                        "column": 47,
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
                        "column": 56,
                        "line": 3
                      },
                      "start": {
                        "column": 53,
                        "line": 3
                      }
                    },
                    "range": [
                      182,
                      185
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          184,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 3
                          },
                          "start": {
                            "column": 55,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        184,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 3
                        },
                        "start": {
                          "column": 55,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    176,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 47,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                174,
                187
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            }
          },
          "range": [
            171,
            187
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 3
          },
          "start": {
            "column": 59,
            "line": 3
          }
        },
        "range": [
          188,
          207
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              196,
              207
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    197,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 3
                    },
                    "start": {
                      "column": 68,
                      "line": 3
                    }
                  }
                },
                "range": [
                  197,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 3
                  },
                  "start": {
                    "column": 68,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  200,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 3
                  },
                  "start": {
                    "column": 71,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 3
              },
              "start": {
                "column": 67,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              190,
              196
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 3
              },
              "start": {
                "column": 61,
                "line": 3
              }
            }
          },
          "range": [
            190,
            207
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 3
            },
            "start": {
              "column": 61,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        },
        "range": [
          152,
          170
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                163,
                169
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                153,
                154
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
            "out": false,
            "range": [
              153,
              169
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        129,
        207
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 3
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
        "name": "nestedUnion",
        "optional": false,
        "range": [
          225,
          236
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
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
                "column": 69,
                "line": 4
              },
              "start": {
                "column": 48,
                "line": 4
              }
            },
            "range": [
              256,
              277
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
                    "name": "fields",
                    "optional": false,
                    "range": [
                      260,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 4
                      },
                      "start": {
                        "column": 52,
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
                        "column": 67,
                        "line": 4
                      },
                      "start": {
                        "column": 58,
                        "line": 4
                      }
                    },
                    "range": [
                      266,
                      275
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              268,
                              269
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 4
                              },
                              "start": {
                                "column": 60,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            268,
                            269
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 4
                            },
                            "start": {
                              "column": 60,
                              "line": 4
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
                              "name": "A",
                              "optional": false,
                              "range": [
                                272,
                                273
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 4
                                },
                                "start": {
                                  "column": 64,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              272,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 4
                              },
                              "start": {
                                "column": 64,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            272,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 4
                            },
                            "start": {
                              "column": 64,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        268,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 4
                        },
                        "start": {
                          "column": 60,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    260,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 4
                    },
                    "start": {
                      "column": 52,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                258,
                277
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 4
                },
                "start": {
                  "column": 50,
                  "line": 4
                }
              }
            }
          },
          "range": [
            255,
            277
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 4
            },
            "start": {
              "column": 47,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 89,
            "line": 4
          },
          "start": {
            "column": 70,
            "line": 4
          }
        },
        "range": [
          278,
          297
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              286,
              297
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    287,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 4
                    },
                    "start": {
                      "column": 79,
                      "line": 4
                    }
                  }
                },
                "range": [
                  287,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 4
                  },
                  "start": {
                    "column": 79,
                    "line": 4
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  290,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 4
                  },
                  "start": {
                    "column": 82,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 4
              },
              "start": {
                "column": 78,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              280,
              286
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 4
              },
              "start": {
                "column": 72,
                "line": 4
              }
            }
          },
          "range": [
            280,
            297
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 4
            },
            "start": {
              "column": 72,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 4
          },
          "start": {
            "column": 28,
            "line": 4
          }
        },
        "range": [
          236,
          254
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                247,
                253
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 39,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                237,
                238
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              237,
              253
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        208,
        297
      ],
      "loc": {
        "end": {
          "column": 89,
          "line": 4
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
            "name": "directUnionSingle",
            "optional": false,
            "range": [
              305,
              322
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"z\"",
                "value": "z",
                "range": [
                  332,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 33,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "direct",
              "optional": false,
              "range": [
                325,
                331
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              325,
              336
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          },
          "range": [
            305,
            336
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        299,
        336
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "directUnionArray",
            "optional": false,
            "range": [
              343,
              359
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"z\"",
                    "value": "z",
                    "range": [
                      370,
                      373
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
                  },
                  {
                    "type": "Literal",
                    "raw": "\"y\"",
                    "value": "y",
                    "range": [
                      375,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 7
                      },
                      "start": {
                        "column": 38,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  369,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "direct",
              "optional": false,
              "range": [
                362,
                368
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              362,
              380
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 7
              }
            }
          },
          "range": [
            343,
            380
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        337,
        380
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "nestedSingle",
            "optional": false,
            "range": [
              387,
              399
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "range": [
                        410,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 8
                        },
                        "start": {
                          "column": 29,
                          "line": 8
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"z\"",
                      "value": "z",
                      "range": [
                        418,
                        421
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 37,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      410,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  409,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 28,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                402,
                408
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              402,
              423
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          },
          "range": [
            387,
            423
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        381,
        423
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "name": "nestedUnionSingle",
            "optional": false,
            "range": [
              430,
              447
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "range": [
                        463,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 9
                        },
                        "start": {
                          "column": 39,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"z\"",
                      "value": "z",
                      "range": [
                        471,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 9
                        },
                        "start": {
                          "column": 47,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      463,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 9
                      },
                      "start": {
                        "column": 39,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  462,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 38,
                    "line": 9
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedUnion",
              "optional": false,
              "range": [
                450,
                461
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 26,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              450,
              476
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          "range": [
            430,
            476
          ],
          "loc": {
            "end": {
              "column": 52,
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
        424,
        476
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "nestedUnionArray",
            "optional": false,
            "range": [
              483,
              499
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "range": [
                        515,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 10
                        },
                        "start": {
                          "column": 38,
                          "line": 10
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"z\"",
                          "value": "z",
                          "range": [
                            524,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 10
                            },
                            "start": {
                              "column": 47,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"y\"",
                          "value": "y",
                          "range": [
                            529,
                            532
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 10
                            },
                            "start": {
                              "column": 52,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        523,
                        533
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 10
                        },
                        "start": {
                          "column": 46,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      515,
                      533
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 10
                      },
                      "start": {
                        "column": 38,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  514,
                  534
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 10
                  },
                  "start": {
                    "column": 37,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedUnion",
              "optional": false,
              "range": [
                502,
                513
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              502,
              535
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 10
              },
              "start": {
                "column": 25,
                "line": 10
              }
            }
          },
          "range": [
            483,
            535
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        477,
        535
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
        "name": "hasZField",
        "optional": false,
        "range": [
          554,
          563
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
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
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 30,
                "line": 12
              }
            },
            "range": [
              567,
              582
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
                    "name": "z",
                    "optional": false,
                    "range": [
                      571,
                      572
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 12
                      },
                      "start": {
                        "column": 34,
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
                        "column": 43,
                        "line": 12
                      },
                      "start": {
                        "column": 35,
                        "line": 12
                      }
                    },
                    "range": [
                      572,
                      580
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        574,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 37,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    571,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 34,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                569,
                582
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 32,
                  "line": 12
                }
              }
            }
          },
          "range": [
            564,
            582
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 12
            },
            "start": {
              "column": 27,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 12
          },
          "start": {
            "column": 46,
            "line": 12
          }
        },
        "range": [
          583,
          589
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            585,
            589
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 12
            },
            "start": {
              "column": 48,
              "line": 12
            }
          }
        }
      },
      "range": [
        537,
        589
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "directUnionSingle",
            "optional": false,
            "range": [
              601,
              618
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 14
              },
              "start": {
                "column": 10,
                "line": 14
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "range": [
            591,
            600
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          591,
          619
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        591,
        619
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "directUnionArray",
            "optional": false,
            "range": [
              636,
              652
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "range": [
            626,
            635
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          626,
          653
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        626,
        653
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "nestedSingle",
            "optional": false,
            "range": [
              670,
              682
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "range": [
            660,
            669
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          660,
          683
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        660,
        683
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "nestedUnionSingle",
            "optional": false,
            "range": [
              700,
              717
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "range": [
            690,
            699
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          690,
          718
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        690,
        718
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "nestedUnionArray",
            "optional": false,
            "range": [
              735,
              751
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 18
              },
              "start": {
                "column": 10,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "range": [
            725,
            734
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          725,
          752
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        725,
        752
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
