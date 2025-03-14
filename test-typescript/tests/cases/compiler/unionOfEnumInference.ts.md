__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    224
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          32,
          43
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                37,
                38
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
              37,
              38
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
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              40,
              41
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "range": [
          27,
          31
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "range": [
        22,
        43
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 3
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
          81,
          94
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                84,
                88
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 1,
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
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                88,
                91
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    90,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  }
                },
                "range": [
                  90,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              84,
              92
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 6
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
            "column": 36,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interface",
        "optional": false,
        "range": [
          55,
          64
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 5
          }
        },
        "range": [
          64,
          80
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
                "name": "Enum",
                "optional": false,
                "range": [
                  75,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 5
                  }
                }
              },
              "range": [
                75,
                79
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
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
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              65,
              79
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        45,
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          142,
          145
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 9
          },
          "start": {
            "column": 46,
            "line": 9
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
          105,
          108
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
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
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 30,
                "line": 9
              }
            },
            "range": [
              126,
              140
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  137,
                  140
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
                        138,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 9
                        },
                        "start": {
                          "column": 42,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      138,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 9
                      },
                      "start": {
                        "column": 42,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 9
                  },
                  "start": {
                    "column": 41,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Interface",
                "optional": false,
                "range": [
                  128,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              },
              "range": [
                128,
                140
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 9
                },
                "start": {
                  "column": 32,
                  "line": 9
                }
              }
            }
          },
          "range": [
            125,
            140
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 9
            },
            "start": {
              "column": 29,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 9
          }
        },
        "range": [
          108,
          124
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
                "name": "Enum",
                "optional": false,
                "range": [
                  119,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
                  }
                }
              },
              "range": [
                119,
                123
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 23,
                  "line": 9
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
                109,
                110
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
            "out": false,
            "range": [
              109,
              123
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        96,
        145
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    218,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
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
                  214,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 12
                  },
                  "start": {
                    "column": 1,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                214,
                220
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 1,
                  "line": 12
                }
              }
            },
            "range": [
              214,
              221
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 1,
                "line": 12
              }
            }
          }
        ],
        "range": [
          211,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 64,
            "line": 11
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
          156,
          159
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
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
                "column": 62,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            },
            "range": [
              161,
              209
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      172,
                      189
                    ],
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Enum",
                                "optional": false,
                                "range": [
                                  173,
                                  177
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 11
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  178,
                                  179
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                173,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 11
                                },
                                "start": {
                                  "column": 26,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              173,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 11
                              },
                              "start": {
                                "column": 26,
                                "line": 11
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Enum",
                                "optional": false,
                                "range": [
                                  182,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 11
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "range": [
                                  187,
                                  188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                182,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 11
                                },
                                "start": {
                                  "column": 35,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              182,
                              188
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 11
                              },
                              "start": {
                                "column": 35,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          173,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 11
                          },
                          "start": {
                            "column": 26,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Interface",
                    "optional": false,
                    "range": [
                      163,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    163,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      201,
                      209
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Enum",
                            "optional": false,
                            "range": [
                              202,
                              206
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 11
                              },
                              "start": {
                                "column": 55,
                                "line": 11
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "range": [
                              207,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 11
                              },
                              "start": {
                                "column": 60,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            202,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 11
                            },
                            "start": {
                              "column": 55,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          202,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 11
                          },
                          "start": {
                            "column": 55,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 11
                      },
                      "start": {
                        "column": 54,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Interface",
                    "optional": false,
                    "range": [
                      192,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 11
                      },
                      "start": {
                        "column": 45,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    192,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 11
                    },
                    "start": {
                      "column": 45,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                163,
                209
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            }
          },
          "range": [
            160,
            209
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        }
      ],
      "range": [
        147,
        223
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
