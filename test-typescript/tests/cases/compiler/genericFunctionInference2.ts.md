__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    825
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reducer",
        "optional": false,
        "range": [
          27,
          34
        ],
        "loc": {
          "end": {
            "column": 12,
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
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              },
              "range": [
                46,
                49
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    48,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "range": [
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              41,
              49
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 3
            }
          },
          "range": [
            51,
            55
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            },
            "range": [
              54,
              55
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            }
          }
        },
        "range": [
          40,
          55
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
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
          34,
          37
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                35,
                36
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
              35,
              36
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
        22,
        56
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "name": "combineReducers",
        "optional": false,
        "range": [
          74,
          89
        ],
        "loc": {
          "end": {
            "column": 32,
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
          "name": "reducers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 79,
                "line": 4
              },
              "start": {
                "column": 44,
                "line": 4
              }
            },
            "range": [
              101,
              136
            ],
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
                    "name": "S",
                    "optional": false,
                    "range": [
                      117,
                      118
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
                    117,
                    118
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
                  111,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 4
                  },
                  "start": {
                    "column": 54,
                    "line": 4
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  106,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 4
                  },
                  "start": {
                    "column": 49,
                    "line": 4
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    128,
                    134
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            131,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 4
                            },
                            "start": {
                              "column": 74,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          131,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 4
                          },
                          "start": {
                            "column": 74,
                            "line": 4
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "range": [
                            129,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 4
                            },
                            "start": {
                              "column": 72,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          129,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 4
                          },
                          "start": {
                            "column": 72,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        129,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 4
                        },
                        "start": {
                          "column": 72,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 4
                    },
                    "start": {
                      "column": 71,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "range": [
                    121,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 4
                    },
                    "start": {
                      "column": 64,
                      "line": 4
                    }
                  }
                },
                "range": [
                  121,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 4
                  },
                  "start": {
                    "column": 64,
                    "line": 4
                  }
                }
              },
              "range": [
                103,
                136
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 4
                },
                "start": {
                  "column": 46,
                  "line": 4
                }
              }
            }
          },
          "range": [
            93,
            136
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 4
            },
            "start": {
              "column": 36,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 92,
            "line": 4
          },
          "start": {
            "column": 80,
            "line": 4
          }
        },
        "range": [
          137,
          149
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              146,
              149
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    147,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 4
                    },
                    "start": {
                      "column": 90,
                      "line": 4
                    }
                  }
                },
                "range": [
                  147,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 4
                  },
                  "start": {
                    "column": 90,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 4
              },
              "start": {
                "column": 89,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reducer",
            "optional": false,
            "range": [
              139,
              146
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 4
              },
              "start": {
                "column": 82,
                "line": 4
              }
            }
          },
          "range": [
            139,
            149
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 4
            },
            "start": {
              "column": 82,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 32,
            "line": 4
          }
        },
        "range": [
          89,
          92
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                90,
                91
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        57,
        150
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyState",
        "optional": false,
        "range": [
          157,
          164
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "combined",
              "optional": false,
              "range": [
                169,
                177
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
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
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              },
              "range": [
                177,
                194
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        181,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 29,
                          "line": 6
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
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      },
                      "range": [
                        184,
                        192
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          186,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 34,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      181,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 29,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  179,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              169,
              194
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          }
        ],
        "range": [
          167,
          196
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "range": [
        152,
        197
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                215,
                252
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    224,
                    252
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'foo'",
                          "value": "foo",
                          "range": [
                            245,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 7
                            },
                            "start": {
                              "column": 47,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          245,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 7
                          },
                          "start": {
                            "column": 47,
                            "line": 7
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'combined'",
                            "value": "combined",
                            "range": [
                              233,
                              243
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 7
                              },
                              "start": {
                                "column": 35,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            233,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 7
                            },
                            "start": {
                              "column": 35,
                              "line": 7
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyState",
                            "optional": false,
                            "range": [
                              225,
                              232
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 7
                              },
                              "start": {
                                "column": 27,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            225,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 7
                            },
                            "start": {
                              "column": 27,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          225,
                          244
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 7
                          },
                          "start": {
                            "column": 27,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        225,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "range": [
                    217,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "range": [
                  217,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              212,
              252
            ],
            "loc": {
              "end": {
                "column": 54,
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
            212,
            252
          ],
          "loc": {
            "end": {
              "column": 54,
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
        198,
        253
      ],
      "loc": {
        "end": {
          "column": 55,
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
            "name": "myReducer1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              },
              "range": [
                271,
                289
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    280,
                    289
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyState",
                        "optional": false,
                        "range": [
                          281,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 9
                          },
                          "start": {
                            "column": 26,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        281,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "range": [
                    273,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  273,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              261,
              289
            ],
            "loc": {
              "end": {
                "column": 34,
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
                      "name": "combined",
                      "optional": false,
                      "range": [
                        314,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 10
                        },
                        "start": {
                          "column": 4,
                          "line": 10
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
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
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  342,
                                  345
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 10
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  342,
                                  345
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                342,
                                345
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 10
                                },
                                "start": {
                                  "column": 32,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "range": [
                            340,
                            347
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 10
                            },
                            "start": {
                              "column": 30,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "combineReducers",
                        "optional": false,
                        "range": [
                          324,
                          339
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 10
                          },
                          "start": {
                            "column": 14,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        324,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      314,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  308,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 11
                  },
                  "start": {
                    "column": 53,
                    "line": 9
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineReducers",
              "optional": false,
              "range": [
                292,
                307
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 9
                },
                "start": {
                  "column": 37,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              292,
              352
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 9
              }
            }
          },
          "range": [
            261,
            352
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 11
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
        255,
        353
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
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
            "name": "myReducer2",
            "optional": false,
            "range": [
              361,
              371
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
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
                      "name": "combined",
                      "optional": false,
                      "range": [
                        396,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 4,
                          "line": 14
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
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
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  424,
                                  427
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 14
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  424,
                                  427
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                424,
                                427
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 14
                                },
                                "start": {
                                  "column": 32,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            422,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 14
                            },
                            "start": {
                              "column": 30,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "combineReducers",
                        "optional": false,
                        "range": [
                          406,
                          421
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        406,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      396,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  390,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 15
                  },
                  "start": {
                    "column": 35,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineReducers",
              "optional": false,
              "range": [
                374,
                389
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              374,
              434
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          },
          "range": [
            361,
            434
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        355,
        435
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
        "name": "withH",
        "optional": false,
        "range": [
          476,
          481
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handlerCreators",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 19
              },
              "start": {
                "column": 44,
                "line": 19
              }
            },
            "range": [
              503,
              532
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  526,
                  532
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
                        527,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 19
                        },
                        "start": {
                          "column": 68,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      527,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 19
                      },
                      "start": {
                        "column": 68,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        530,
                        531
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 19
                        },
                        "start": {
                          "column": 71,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      530,
                      531
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 19
                      },
                      "start": {
                        "column": 71,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 19
                  },
                  "start": {
                    "column": 67,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandleCreatorsFactory",
                "optional": false,
                "range": [
                  505,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 19
                  },
                  "start": {
                    "column": 46,
                    "line": 19
                  }
                }
              },
              "range": [
                505,
                532
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 19
                },
                "start": {
                  "column": 46,
                  "line": 19
                }
              }
            }
          },
          "range": [
            488,
            532
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 19
            },
            "start": {
              "column": 29,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 77,
            "line": 19
          },
          "start": {
            "column": 74,
            "line": 19
          }
        },
        "range": [
          533,
          536
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              535,
              536
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 19
              },
              "start": {
                "column": 76,
                "line": 19
              }
            }
          },
          "range": [
            535,
            536
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 19
            },
            "start": {
              "column": 76,
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
            "column": 22,
            "line": 19
          }
        },
        "range": [
          481,
          487
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
                482,
                483
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              482,
              483
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 23,
                "line": 19
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
                485,
                486
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
            "out": false,
            "range": [
              485,
              486
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
          }
        ]
      },
      "range": [
        459,
        537
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          544,
          549
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "range": [
                554,
                557
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
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
                  "column": 26,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              },
              "range": [
                557,
                565
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  559,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 20,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              554,
              565
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 15,
                "line": 21
              }
            }
          }
        ],
        "range": [
          552,
          567
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 21
          }
        }
      },
      "range": [
        539,
        567
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandleCreatorsFactory",
        "optional": false,
        "range": [
          574,
          595
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "initialProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 23
                },
                "start": {
                  "column": 48,
                  "line": 23
                }
              },
              "range": [
                617,
                620
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    619,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 23
                    },
                    "start": {
                      "column": 50,
                      "line": 23
                    }
                  }
                },
                "range": [
                  619,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 23
                  },
                  "start": {
                    "column": 50,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              605,
              620
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 23
              },
              "start": {
                "column": 36,
                "line": 23
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 94,
              "line": 23
            },
            "start": {
              "column": 53,
              "line": 23
            }
          },
          "range": [
            622,
            663
          ],
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
                  "name": "U",
                  "optional": false,
                  "range": [
                    639,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 23
                    },
                    "start": {
                      "column": 70,
                      "line": 23
                    }
                  }
                },
                "range": [
                  639,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 23
                  },
                  "start": {
                    "column": 70,
                    "line": 23
                  }
                }
              },
              "range": [
                633,
                640
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 23
                },
                "start": {
                  "column": 64,
                  "line": 23
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                628,
                629
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 23
                },
                "start": {
                  "column": 59,
                  "line": 23
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 23
                      },
                      "start": {
                        "column": 80,
                        "line": 23
                      }
                    },
                    "range": [
                      649,
                      652
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          651,
                          652
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 23
                          },
                          "start": {
                            "column": 82,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        651,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 23
                        },
                        "start": {
                          "column": 82,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    644,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 23
                    },
                    "start": {
                      "column": 75,
                      "line": 23
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 23
                  },
                  "start": {
                    "column": 85,
                    "line": 23
                  }
                },
                "range": [
                  654,
                  661
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        659,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 23
                        },
                        "start": {
                          "column": 90,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      659,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 23
                      },
                      "start": {
                        "column": 90,
                        "line": 23
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        657,
                        658
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 23
                        },
                        "start": {
                          "column": 88,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      657,
                      658
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 23
                      },
                      "start": {
                        "column": 88,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    657,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 23
                    },
                    "start": {
                      "column": 88,
                      "line": 23
                    }
                  }
                }
              },
              "range": [
                643,
                661
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 23
                },
                "start": {
                  "column": 74,
                  "line": 23
                }
              }
            },
            "range": [
              625,
              663
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 23
              },
              "start": {
                "column": 56,
                "line": 23
              }
            }
          }
        },
        "range": [
          604,
          663
        ],
        "loc": {
          "end": {
            "column": 94,
            "line": 23
          },
          "start": {
            "column": 35,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 23
          },
          "start": {
            "column": 26,
            "line": 23
          }
        },
        "range": [
          595,
          601
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
                596,
                597
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              596,
              597
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 23
              },
              "start": {
                "column": 27,
                "line": 23
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
                599,
                600
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 23
                },
                "start": {
                  "column": 30,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              599,
              600
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 23
              },
              "start": {
                "column": 30,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        569,
        664
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "enhancer4",
            "optional": false,
            "range": [
              672,
              681
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "range": [
                          715,
                          723
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 26
                          },
                          "start": {
                            "column": 4,
                            "line": 26
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              748,
                              750
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 26
                              },
                              "start": {
                                "column": 37,
                                "line": 26
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
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 26
                                  }
                                },
                                "range": [
                                  738,
                                  743
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    740,
                                    743
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 26
                                    }
                                  }
                                }
                              },
                              "range": [
                                737,
                                743
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 26
                                },
                                "start": {
                                  "column": 26,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            736,
                            750
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 26
                            },
                            "start": {
                              "column": 25,
                              "line": 26
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "range": [
                              726,
                              731
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 26
                              },
                              "start": {
                                "column": 15,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "range": [
                          725,
                          750
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 26
                          },
                          "start": {
                            "column": 14,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        715,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 26
                        },
                        "start": {
                          "column": 4,
                          "line": 26
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onSubmit",
                        "optional": false,
                        "range": [
                          756,
                          764
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 27
                          },
                          "start": {
                            "column": 4,
                            "line": 27
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              789,
                              791
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 27
                              },
                              "start": {
                                "column": 37,
                                "line": 27
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
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 27
                                  }
                                },
                                "range": [
                                  779,
                                  784
                                ],
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    781,
                                    784
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 27
                                    }
                                  }
                                }
                              },
                              "range": [
                                778,
                                784
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 27
                                },
                                "start": {
                                  "column": 26,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "range": [
                            777,
                            791
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 27
                            },
                            "start": {
                              "column": 25,
                              "line": 27
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "range": [
                              767,
                              772
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 27
                              },
                              "start": {
                                "column": 15,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "range": [
                          766,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 27
                          },
                          "start": {
                            "column": 14,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        756,
                        791
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
                    709,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 28
                    },
                    "start": {
                      "column": 43,
                      "line": 25
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 25
                        },
                        "start": {
                          "column": 30,
                          "line": 25
                        }
                      },
                      "range": [
                        696,
                        703
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "range": [
                            698,
                            703
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 25
                            },
                            "start": {
                              "column": 32,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          698,
                          703
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 25
                          },
                          "start": {
                            "column": 32,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      691,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 25
                      },
                      "start": {
                        "column": 25,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  690,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withH",
              "optional": false,
              "range": [
                684,
                689
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 18,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              684,
              796
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 18,
                "line": 25
              }
            }
          },
          "range": [
            672,
            796
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        666,
        797
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              818,
              822
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 30
              },
              "start": {
                "column": 19,
                "line": 30
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
            "name": "enhancer4",
            "optional": false,
            "range": [
              799,
              808
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 30
              },
              "start": {
                "column": 0,
                "line": 30
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "onChange",
            "optional": false,
            "range": [
              809,
              817
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 30
              },
              "start": {
                "column": 10,
                "line": 30
              }
            }
          },
          "range": [
            799,
            817
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          799,
          823
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        799,
        824
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
