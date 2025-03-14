__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2254
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped1",
        "optional": false,
        "range": [
          5,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
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
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            36,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 48,
                    "line": 1
                  }
                },
                "range": [
                  48,
                  51
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      50,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 1
                      },
                      "start": {
                        "column": 50,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                47,
                51
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            45,
            53
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        },
        "range": [
          33,
          55
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          30
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                23,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
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
            "out": false,
            "range": [
              13,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        56
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 1
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
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    },
                    "range": [
                      126,
                      136
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              130,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 4
                              },
                              "start": {
                                "column": 15,
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
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            },
                            "range": [
                              131,
                              134
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "range": [
                                  133,
                                  134
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                133,
                                134
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 4
                                },
                                "start": {
                                  "column": 18,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            130,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 15,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        128,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    125,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      139,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      143,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    139,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 24,
                      "line": 4
                    }
                  }
                },
                "range": [
                  125,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              119,
              148
            ],
            "loc": {
              "end": {
                "column": 33,
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
          113,
          150
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 55,
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
        "name": "f1",
        "optional": false,
        "range": [
          67,
          69
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 33,
                "line": 3
              }
            },
            "range": [
              91,
              103
            ],
            "typeAnnotation": {
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
                      "name": "K",
                      "optional": false,
                      "range": [
                        101,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 43,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      101,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 43,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped1",
                "optional": false,
                "range": [
                  93,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                93,
                103
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            }
          },
          "range": [
            88,
            103
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            },
            "range": [
              108,
              111
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  110,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              },
              "range": [
                110,
                111
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            }
          },
          "range": [
            105,
            111
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
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          69,
          87
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                80,
                86
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                70,
                71
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
            "out": false,
            "range": [
              70,
              86
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        58,
        150
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped2",
        "optional": false,
        "range": [
          157,
          164
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              193,
              194
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 41,
                "line": 7
              }
            }
          },
          "range": [
            193,
            194
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 41,
              "line": 7
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            188,
            189
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 36,
              "line": 7
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "get",
                "raw": "get"
              },
              "range": [
                198,
                204
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 7
                },
                "start": {
                  "column": 46,
                  "line": 7
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                205,
                207
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 7
                },
                "start": {
                  "column": 53,
                  "line": 7
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  204,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 7
                  },
                  "start": {
                    "column": 52,
                    "line": 7
                  }
                }
              },
              "range": [
                204,
                205
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 7
                },
                "start": {
                  "column": 52,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            198,
            207
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 7
            },
            "start": {
              "column": 46,
              "line": 7
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
                "name": "a",
                "optional": false,
                "range": [
                  212,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 7
                  },
                  "start": {
                    "column": 60,
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
                    "column": 64,
                    "line": 7
                  },
                  "start": {
                    "column": 61,
                    "line": 7
                  }
                },
                "range": [
                  213,
                  216
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      215,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 7
                      },
                      "start": {
                        "column": 63,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    215,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 7
                    },
                    "start": {
                      "column": 63,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                212,
                216
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 7
                },
                "start": {
                  "column": 60,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            210,
            218
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 7
            },
            "start": {
              "column": 58,
              "line": 7
            }
          }
        },
        "range": [
          185,
          220
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 7
          },
          "start": {
            "column": 33,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 7
          }
        },
        "range": [
          164,
          182
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                175,
                181
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              165,
              181
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        152,
        221
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 7
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    },
                    "range": [
                      299,
                      309
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              303,
                              304
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 10
                              },
                              "start": {
                                "column": 15,
                                "line": 10
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
                                "column": 19,
                                "line": 10
                              },
                              "start": {
                                "column": 16,
                                "line": 10
                              }
                            },
                            "range": [
                              304,
                              307
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "range": [
                                  306,
                                  307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                306,
                                307
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 10
                                },
                                "start": {
                                  "column": 18,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            303,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 10
                            },
                            "start": {
                              "column": 15,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        301,
                        309
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    298,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      312,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      316,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    312,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 24,
                      "line": 10
                    }
                  }
                },
                "range": [
                  298,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              292,
              321
            ],
            "loc": {
              "end": {
                "column": 33,
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
          286,
          333
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 63,
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
        "name": "f2",
        "optional": false,
        "range": [
          232,
          234
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 33,
                "line": 9
              }
            },
            "range": [
              256,
              268
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  265,
                  268
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        266,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 43,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      266,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 43,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 42,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped2",
                "optional": false,
                "range": [
                  258,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 9
                  },
                  "start": {
                    "column": 35,
                    "line": 9
                  }
                }
              },
              "range": [
                258,
                268
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 35,
                  "line": 9
                }
              }
            }
          },
          "range": [
            253,
            268
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 9
            },
            "start": {
              "column": 30,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 9
              },
              "start": {
                "column": 50,
                "line": 9
              }
            },
            "range": [
              273,
              284
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "get",
                    "raw": "get"
                  },
                  "range": [
                    275,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 9
                    },
                    "start": {
                      "column": 52,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    282,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 9
                    },
                    "start": {
                      "column": 59,
                      "line": 9
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      281,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 9
                      },
                      "start": {
                        "column": 58,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    281,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 9
                    },
                    "start": {
                      "column": 58,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                275,
                284
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 9
                },
                "start": {
                  "column": 52,
                  "line": 9
                }
              }
            }
          },
          "range": [
            270,
            284
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 9
            },
            "start": {
              "column": 47,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        },
        "range": [
          234,
          252
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                245,
                251
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                235,
                236
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              235,
              251
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        223,
        333
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped3",
        "optional": false,
        "range": [
          340,
          347
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              376,
              377
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 13
              },
              "start": {
                "column": 41,
                "line": 13
              }
            }
          },
          "range": [
            376,
            377
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 13
            },
            "start": {
              "column": 41,
              "line": 13
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            371,
            372
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 13
            },
            "start": {
              "column": 36,
              "line": 13
            }
          }
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              390,
              393
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
                    391,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 13
                    },
                    "start": {
                      "column": 56,
                      "line": 13
                    }
                  }
                },
                "range": [
                  391,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 13
                  },
                  "start": {
                    "column": 56,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 13
              },
              "start": {
                "column": 55,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Uppercase",
            "optional": false,
            "range": [
              381,
              390
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 13
              },
              "start": {
                "column": 46,
                "line": 13
              }
            }
          },
          "range": [
            381,
            393
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 13
            },
            "start": {
              "column": 46,
              "line": 13
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
                "name": "a",
                "optional": false,
                "range": [
                  398,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 13
                  },
                  "start": {
                    "column": 63,
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
                    "column": 67,
                    "line": 13
                  },
                  "start": {
                    "column": 64,
                    "line": 13
                  }
                },
                "range": [
                  399,
                  402
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      401,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 13
                      },
                      "start": {
                        "column": 66,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    401,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 13
                    },
                    "start": {
                      "column": 66,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                398,
                402
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 13
                },
                "start": {
                  "column": 63,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            396,
            404
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 13
            },
            "start": {
              "column": 61,
              "line": 13
            }
          }
        },
        "range": [
          368,
          406
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 13
          },
          "start": {
            "column": 33,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 13
          },
          "start": {
            "column": 12,
            "line": 13
          }
        },
        "range": [
          347,
          365
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                358,
                364
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                348,
                349
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              348,
              364
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        335,
        407
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    },
                    "range": [
                      488,
                      498
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              492,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 16
                              },
                              "start": {
                                "column": 15,
                                "line": 16
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
                                "column": 19,
                                "line": 16
                              },
                              "start": {
                                "column": 16,
                                "line": 16
                              }
                            },
                            "range": [
                              493,
                              496
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "range": [
                                  495,
                                  496
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
                                495,
                                496
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
                            }
                          },
                          "range": [
                            492,
                            496
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        490,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    487,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      501,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      505,
                      508
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 16
                      },
                      "start": {
                        "column": 28,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    501,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 24,
                      "line": 16
                    }
                  }
                },
                "range": [
                  487,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              481,
              510
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          475,
          522
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 66,
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
        "name": "f3",
        "optional": false,
        "range": [
          418,
          420
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 15
              },
              "start": {
                "column": 33,
                "line": 15
              }
            },
            "range": [
              442,
              454
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  451,
                  454
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        452,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 15
                        },
                        "start": {
                          "column": 43,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      452,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 15
                      },
                      "start": {
                        "column": 43,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 15
                  },
                  "start": {
                    "column": 42,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped3",
                "optional": false,
                "range": [
                  444,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 15
                  },
                  "start": {
                    "column": 35,
                    "line": 15
                  }
                }
              },
              "range": [
                444,
                454
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 15
                },
                "start": {
                  "column": 35,
                  "line": 15
                }
              }
            }
          },
          "range": [
            439,
            454
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 15
            },
            "start": {
              "column": 30,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 15
              },
              "start": {
                "column": 50,
                "line": 15
              }
            },
            "range": [
              459,
              473
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  470,
                  473
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        471,
                        472
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 15
                        },
                        "start": {
                          "column": 62,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      471,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 15
                      },
                      "start": {
                        "column": 62,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 15
                  },
                  "start": {
                    "column": 61,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "range": [
                  461,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 15
                  },
                  "start": {
                    "column": 52,
                    "line": 15
                  }
                }
              },
              "range": [
                461,
                473
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 15
                },
                "start": {
                  "column": 52,
                  "line": 15
                }
              }
            }
          },
          "range": [
            456,
            473
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 15
            },
            "start": {
              "column": 47,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        },
        "range": [
          420,
          438
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                431,
                437
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                421,
                422
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              421,
              437
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        409,
        522
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped4",
        "optional": false,
        "range": [
          529,
          536
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              573,
              574
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            573,
            574
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 20
            },
            "start": {
              "column": 8,
              "line": 20
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            568,
            569
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 20
            },
            "start": {
              "column": 3,
              "line": 20
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              577,
              578
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          },
          "range": [
            577,
            578
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        },
        "range": [
          563,
          581
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 39,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 19
          }
        },
        "range": [
          536,
          560
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "_",
                    "raw": "_"
                  },
                  "range": [
                    547,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 19
                    },
                    "start": {
                      "column": 23,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    557,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 19
                    },
                    "start": {
                      "column": 33,
                      "line": 19
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    551,
                    557
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 19
                    },
                    "start": {
                      "column": 27,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                547,
                559
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                537,
                538
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
              537,
              559
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        524,
        582
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 7,
                        "line": 24
                      }
                    },
                    "range": [
                      669,
                      683
                    ],
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "_",
                            "raw": "_"
                          },
                          "range": [
                            671,
                            675
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 24
                            },
                            "start": {
                              "column": 9,
                              "line": 24
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            681,
                            683
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 24
                            },
                            "start": {
                              "column": 19,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            675,
                            681
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 24
                            },
                            "start": {
                              "column": 13,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        671,
                        683
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 9,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    668,
                    683
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 6,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      686,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      690,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 24
                      },
                      "start": {
                        "column": 28,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    686,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "range": [
                  668,
                  694
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 6,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              664,
              695
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          }
        ],
        "range": [
          660,
          697
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 76,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          593,
          595
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 23
              },
              "start": {
                "column": 39,
                "line": 23
              }
            },
            "range": [
              623,
              635
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  632,
                  635
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        633,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 23
                        },
                        "start": {
                          "column": 49,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      633,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 23
                      },
                      "start": {
                        "column": 49,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 23
                  },
                  "start": {
                    "column": 48,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped4",
                "optional": false,
                "range": [
                  625,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 23
                  },
                  "start": {
                    "column": 41,
                    "line": 23
                  }
                }
              },
              "range": [
                625,
                635
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 23
                },
                "start": {
                  "column": 41,
                  "line": 23
                }
              }
            }
          },
          "range": [
            620,
            635
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
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 23
              },
              "start": {
                "column": 56,
                "line": 23
              }
            },
            "range": [
              640,
              658
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    655,
                    658
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          656,
                          657
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 23
                          },
                          "start": {
                            "column": 72,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        656,
                        657
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 23
                        },
                        "start": {
                          "column": 72,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 23
                    },
                    "start": {
                      "column": 71,
                      "line": 23
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped4",
                  "optional": false,
                  "range": [
                    648,
                    655
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
                "range": [
                  648,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 23
                  },
                  "start": {
                    "column": 64,
                    "line": 23
                  }
                }
              },
              "range": [
                642,
                658
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 23
                },
                "start": {
                  "column": 58,
                  "line": 23
                }
              }
            }
          },
          "range": [
            637,
            658
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 23
            },
            "start": {
              "column": 53,
              "line": 23
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 23
          },
          "start": {
            "column": 11,
            "line": 23
          }
        },
        "range": [
          595,
          619
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "_",
                    "raw": "_"
                  },
                  "range": [
                    606,
                    610
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    616,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 23
                    },
                    "start": {
                      "column": 32,
                      "line": 23
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    610,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 26,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                606,
                618
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 23
                },
                "start": {
                  "column": 22,
                  "line": 23
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                596,
                597
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              596,
              618
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 12,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        584,
        697
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped5",
        "optional": false,
        "range": [
          704,
          711
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              742,
              743
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            742,
            743
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 28
            },
            "start": {
              "column": 8,
              "line": 28
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            737,
            738
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 28
            },
            "start": {
              "column": 3,
              "line": 28
            }
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                747,
                748
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 13,
                  "line": 28
                }
              }
            },
            "range": [
              747,
              748
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 28
              },
              "start": {
                "column": 13,
                "line": 28
              }
            }
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "_",
                  "raw": "_"
                },
                "range": [
                  757,
                  761
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  767,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 28
                  },
                  "start": {
                    "column": 33,
                    "line": 28
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  761,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 28
                  },
                  "start": {
                    "column": 27,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              757,
              769
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 28
              },
              "start": {
                "column": 23,
                "line": 28
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              776,
              781
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 28
              },
              "start": {
                "column": 42,
                "line": 28
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                772,
                773
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 28
                },
                "start": {
                  "column": 38,
                  "line": 28
                }
              }
            },
            "range": [
              772,
              773
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 28
              },
              "start": {
                "column": 38,
                "line": 28
              }
            }
          },
          "range": [
            747,
            781
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 28
            },
            "start": {
              "column": 13,
              "line": 28
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              784,
              785
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 28
              },
              "start": {
                "column": 50,
                "line": 28
              }
            }
          },
          "range": [
            784,
            785
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 28
            },
            "start": {
              "column": 50,
              "line": 28
            }
          }
        },
        "range": [
          732,
          788
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 33,
            "line": 27
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 27
          },
          "start": {
            "column": 12,
            "line": 27
          }
        },
        "range": [
          711,
          729
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                722,
                728
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                712,
                713
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              712,
              728
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        699,
        789
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 32
                      },
                      "start": {
                        "column": 7,
                        "line": 32
                      }
                    },
                    "range": [
                      870,
                      884
                    ],
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "_",
                            "raw": "_"
                          },
                          "range": [
                            872,
                            876
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 32
                            },
                            "start": {
                              "column": 9,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            882,
                            884
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 32
                            },
                            "start": {
                              "column": 19,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            876,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 32
                            },
                            "start": {
                              "column": 13,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        872,
                        884
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 32
                        },
                        "start": {
                          "column": 9,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    869,
                    884
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 32
                    },
                    "start": {
                      "column": 6,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      887,
                      890
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 32
                      },
                      "start": {
                        "column": 24,
                        "line": 32
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      891,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 32
                      },
                      "start": {
                        "column": 28,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    887,
                    895
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 32
                    },
                    "start": {
                      "column": 24,
                      "line": 32
                    }
                  }
                },
                "range": [
                  869,
                  895
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 6,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              865,
              896
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          }
        ],
        "range": [
          861,
          898
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 70,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          800,
          802
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 31
              },
              "start": {
                "column": 33,
                "line": 31
              }
            },
            "range": [
              824,
              836
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  833,
                  836
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        834,
                        835
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 31
                        },
                        "start": {
                          "column": 43,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      834,
                      835
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 31
                      },
                      "start": {
                        "column": 43,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 31
                  },
                  "start": {
                    "column": 42,
                    "line": 31
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped5",
                "optional": false,
                "range": [
                  826,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 31
                  },
                  "start": {
                    "column": 35,
                    "line": 31
                  }
                }
              },
              "range": [
                826,
                836
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 31
                },
                "start": {
                  "column": 35,
                  "line": 31
                }
              }
            }
          },
          "range": [
            821,
            836
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 31
            },
            "start": {
              "column": 30,
              "line": 31
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 31
              },
              "start": {
                "column": 50,
                "line": 31
              }
            },
            "range": [
              841,
              859
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    856,
                    859
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          857,
                          858
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 31
                          },
                          "start": {
                            "column": 66,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        857,
                        858
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 31
                        },
                        "start": {
                          "column": 66,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 31
                    },
                    "start": {
                      "column": 65,
                      "line": 31
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped5",
                  "optional": false,
                  "range": [
                    849,
                    856
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 31
                    },
                    "start": {
                      "column": 58,
                      "line": 31
                    }
                  }
                },
                "range": [
                  849,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 31
                  },
                  "start": {
                    "column": 58,
                    "line": 31
                  }
                }
              },
              "range": [
                843,
                859
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 31
                },
                "start": {
                  "column": 52,
                  "line": 31
                }
              }
            }
          },
          "range": [
            838,
            859
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 31
            },
            "start": {
              "column": 47,
              "line": 31
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 31
          },
          "start": {
            "column": 11,
            "line": 31
          }
        },
        "range": [
          802,
          820
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                813,
                819
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 31
                },
                "start": {
                  "column": 22,
                  "line": 31
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                803,
                804
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
            "out": false,
            "range": [
              803,
              819
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 31
              },
              "start": {
                "column": 12,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        791,
        898
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped6",
        "optional": false,
        "range": [
          951,
          958
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              989,
              990
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          },
          "range": [
            989,
            990
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 38
            },
            "start": {
              "column": 8,
              "line": 38
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            984,
            985
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 38
            },
            "start": {
              "column": 3,
              "line": 38
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "_",
                "raw": "_"
              },
              "range": [
                994,
                998
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 38
                },
                "start": {
                  "column": 13,
                  "line": 38
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                999,
                1001
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 38
                },
                "start": {
                  "column": 18,
                  "line": 38
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  998,
                  999
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
              "range": [
                998,
                999
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
            }
          ],
          "range": [
            994,
            1001
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 38
            },
            "start": {
              "column": 13,
              "line": 38
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              1004,
              1005
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 38
              },
              "start": {
                "column": 23,
                "line": 38
              }
            }
          },
          "range": [
            1004,
            1005
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 38
            },
            "start": {
              "column": 23,
              "line": 38
            }
          }
        },
        "range": [
          979,
          1008
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 33,
            "line": 37
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 37
          },
          "start": {
            "column": 12,
            "line": 37
          }
        },
        "range": [
          958,
          976
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                969,
                975
              ],
              "loc": {
                "end": {
                  "column": 29,
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
              "name": "K",
              "optional": false,
              "range": [
                959,
                960
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
              959,
              975
            ],
            "loc": {
              "end": {
                "column": 29,
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
        946,
        1009
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 42
                      },
                      "start": {
                        "column": 7,
                        "line": 42
                      }
                    },
                    "range": [
                      1090,
                      1104
                    ],
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "_",
                            "raw": "_"
                          },
                          "range": [
                            1092,
                            1096
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 42
                            },
                            "start": {
                              "column": 9,
                              "line": 42
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            1102,
                            1104
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 42
                            },
                            "start": {
                              "column": 19,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1096,
                            1102
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 42
                            },
                            "start": {
                              "column": 13,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        1092,
                        1104
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 42
                        },
                        "start": {
                          "column": 9,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    1089,
                    1104
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 42
                    },
                    "start": {
                      "column": 6,
                      "line": 42
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      1107,
                      1110
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 42
                      },
                      "start": {
                        "column": 24,
                        "line": 42
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      1111,
                      1114
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 42
                      },
                      "start": {
                        "column": 28,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1107,
                    1115
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 24,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1089,
                  1115
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 42
                  },
                  "start": {
                    "column": 6,
                    "line": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1085,
              1116
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          }
        ],
        "range": [
          1081,
          1127
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 70,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          1020,
          1022
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 41
              },
              "start": {
                "column": 33,
                "line": 41
              }
            },
            "range": [
              1044,
              1056
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1053,
                  1056
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        1054,
                        1055
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 41
                        },
                        "start": {
                          "column": 43,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1054,
                      1055
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 41
                      },
                      "start": {
                        "column": 43,
                        "line": 41
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 41
                  },
                  "start": {
                    "column": 42,
                    "line": 41
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped6",
                "optional": false,
                "range": [
                  1046,
                  1053
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 41
                  },
                  "start": {
                    "column": 35,
                    "line": 41
                  }
                }
              },
              "range": [
                1046,
                1056
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 41
                },
                "start": {
                  "column": 35,
                  "line": 41
                }
              }
            }
          },
          "range": [
            1041,
            1056
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 41
            },
            "start": {
              "column": 30,
              "line": 41
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 41
              },
              "start": {
                "column": 50,
                "line": 41
              }
            },
            "range": [
              1061,
              1079
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1076,
                    1079
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          1077,
                          1078
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 41
                          },
                          "start": {
                            "column": 66,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        1077,
                        1078
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 41
                        },
                        "start": {
                          "column": 66,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 41
                    },
                    "start": {
                      "column": 65,
                      "line": 41
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped6",
                  "optional": false,
                  "range": [
                    1069,
                    1076
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 41
                    },
                    "start": {
                      "column": 58,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1069,
                  1079
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 41
                  },
                  "start": {
                    "column": 58,
                    "line": 41
                  }
                }
              },
              "range": [
                1063,
                1079
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 41
                },
                "start": {
                  "column": 52,
                  "line": 41
                }
              }
            }
          },
          "range": [
            1058,
            1079
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 41
            },
            "start": {
              "column": 47,
              "line": 41
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 41
          },
          "start": {
            "column": 11,
            "line": 41
          }
        },
        "range": [
          1022,
          1040
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                1033,
                1039
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 41
                },
                "start": {
                  "column": 22,
                  "line": 41
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1023,
                1024
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 12,
                  "line": 41
                }
              }
            },
            "out": false,
            "range": [
              1023,
              1039
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 41
              },
              "start": {
                "column": 12,
                "line": 41
              }
            }
          }
        ]
      },
      "range": [
        1011,
        1127
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          1156,
          1159
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1200,
              1201
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 48
              },
              "start": {
                "column": 18,
                "line": 48
              }
            }
          },
          "range": [
            1200,
            1201
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 48
            },
            "start": {
              "column": 18,
              "line": 48
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "RemappedT",
          "optional": false,
          "range": [
            1187,
            1196
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 48
            },
            "start": {
              "column": 5,
              "line": 48
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "get",
                "raw": "get"
              },
              "range": [
                1205,
                1211
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 48
                },
                "start": {
                  "column": 23,
                  "line": 48
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                1220,
                1222
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 48
                },
                "start": {
                  "column": 38,
                  "line": 48
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RemappedT",
                "optional": false,
                "range": [
                  1211,
                  1220
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 48
                  },
                  "start": {
                    "column": 29,
                    "line": 48
                  }
                }
              },
              "range": [
                1211,
                1220
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 48
                },
                "start": {
                  "column": 29,
                  "line": 48
                }
              }
            }
          ],
          "range": [
            1205,
            1222
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 48
            },
            "start": {
              "column": 23,
              "line": 48
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemappedT",
            "optional": false,
            "range": [
              1225,
              1234
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 48
              },
              "start": {
                "column": 43,
                "line": 48
              }
            }
          },
          "range": [
            1225,
            1234
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 48
            },
            "start": {
              "column": 43,
              "line": 48
            }
          }
        },
        "range": [
          1180,
          1237
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 29,
            "line": 47
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 47
          },
          "start": {
            "column": 8,
            "line": 47
          }
        },
        "range": [
          1159,
          1177
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                1170,
                1176
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 47
                },
                "start": {
                  "column": 19,
                  "line": 47
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
                1160,
                1161
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 47
                },
                "start": {
                  "column": 9,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1160,
              1176
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 47
              },
              "start": {
                "column": 9,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        1151,
        1238
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "get",
            "optional": false,
            "range": [
              1246,
              1249
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 51
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1296,
                  1299
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 51
                  },
                  "start": {
                    "column": 56,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      1306,
                      1307
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 51
                      },
                      "start": {
                        "column": 66,
                        "line": 51
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "get",
                      "raw": "get"
                    },
                    "range": [
                      1300,
                      1306
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 51
                      },
                      "start": {
                        "column": 60,
                        "line": 51
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      1307,
                      1309
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 51
                      },
                      "start": {
                        "column": 67,
                        "line": 51
                      }
                    }
                  }
                ],
                "range": [
                  1300,
                  1309
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 51
                  },
                  "start": {
                    "column": 60,
                    "line": 51
                  }
                }
              },
              "range": [
                1296,
                1310
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 51
                },
                "start": {
                  "column": 56,
                  "line": 51
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
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 51
                    },
                    "start": {
                      "column": 32,
                      "line": 51
                    }
                  },
                  "range": [
                    1272,
                    1275
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1274,
                        1275
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 51
                        },
                        "start": {
                          "column": 34,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1274,
                      1275
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 51
                      },
                      "start": {
                        "column": 34,
                        "line": 51
                      }
                    }
                  }
                },
                "range": [
                  1271,
                  1275
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 51
                  },
                  "start": {
                    "column": 31,
                    "line": 51
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 51
                    },
                    "start": {
                      "column": 40,
                      "line": 51
                    }
                  },
                  "range": [
                    1280,
                    1288
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1285,
                        1288
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
                              1286,
                              1287
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 51
                              },
                              "start": {
                                "column": 46,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            1286,
                            1287
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 51
                            },
                            "start": {
                              "column": 46,
                              "line": 51
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 51
                        },
                        "start": {
                          "column": 45,
                          "line": 51
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1282,
                        1285
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 51
                        },
                        "start": {
                          "column": 42,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1282,
                      1288
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 51
                      },
                      "start": {
                        "column": 42,
                        "line": 51
                      }
                    }
                  }
                },
                "range": [
                  1277,
                  1288
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 51
                  },
                  "start": {
                    "column": 37,
                    "line": 51
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 51
                },
                "start": {
                  "column": 49,
                  "line": 51
                }
              },
              "range": [
                1289,
                1292
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1291,
                    1292
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 51
                    },
                    "start": {
                      "column": 51,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1291,
                  1292
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 51
                  },
                  "start": {
                    "column": 51,
                    "line": 51
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 51
                },
                "start": {
                  "column": 12,
                  "line": 51
                }
              },
              "range": [
                1252,
                1270
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      1263,
                      1269
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 51
                      },
                      "start": {
                        "column": 23,
                        "line": 51
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
                      1253,
                      1254
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 51
                      },
                      "start": {
                        "column": 13,
                        "line": 51
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1253,
                    1269
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 51
                    },
                    "start": {
                      "column": 13,
                      "line": 51
                    }
                  }
                }
              ]
            },
            "range": [
              1252,
              1310
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 51
              },
              "start": {
                "column": 12,
                "line": 51
              }
            }
          },
          "range": [
            1246,
            1310
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 51
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1240,
        1311
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1411,
          1448
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "range": [
                1417,
                1420
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
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
                  "column": 15,
                  "line": 56
                },
                "start": {
                  "column": 7,
                  "line": 56
                }
              },
              "range": [
                1420,
                1428
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1422,
                  1428
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 56
                  },
                  "start": {
                    "column": 9,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1417,
              1429
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "max",
              "optional": false,
              "range": [
                1434,
                1437
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
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
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 7,
                  "line": 57
                }
              },
              "range": [
                1437,
                1445
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1439,
                  1445
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 57
                  },
                  "start": {
                    "column": 9,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1434,
              1446
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 17,
            "line": 55
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bounds",
        "optional": false,
        "range": [
          1404,
          1410
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 55
          },
          "start": {
            "column": 10,
            "line": 55
          }
        }
      },
      "range": [
        1394,
        1448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericBoundsOf",
        "optional": false,
        "range": [
          1455,
          1470
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
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
                1494,
                1495
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 61
                },
                "start": {
                  "column": 16,
                  "line": 61
                }
              }
            },
            "range": [
              1494,
              1495
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 61
              },
              "start": {
                "column": 16,
                "line": 61
              }
            }
          },
          "range": [
            1488,
            1495
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 61
            },
            "start": {
              "column": 10,
              "line": 61
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            1483,
            1484
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 61
            },
            "start": {
              "column": 5,
              "line": 61
            }
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1501,
                  1502
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 61
                  },
                  "start": {
                    "column": 23,
                    "line": 61
                  }
                }
              },
              "range": [
                1501,
                1502
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 61
                },
                "start": {
                  "column": 23,
                  "line": 61
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
                  1499,
                  1500
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 61
                  },
                  "start": {
                    "column": 21,
                    "line": 61
                  }
                }
              },
              "range": [
                1499,
                1500
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 61
                },
                "start": {
                  "column": 21,
                  "line": 61
                }
              }
            },
            "range": [
              1499,
              1503
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 61
              },
              "start": {
                "column": 21,
                "line": 61
              }
            }
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1512,
                  1518
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 61
                  },
                  "start": {
                    "column": 34,
                    "line": 61
                  }
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  1521,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 61
                  },
                  "start": {
                    "column": 43,
                    "line": 61
                  }
                }
              }
            ],
            "range": [
              1512,
              1530
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 61
              },
              "start": {
                "column": 34,
                "line": 61
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1537,
              1542
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 61
              },
              "start": {
                "column": 59,
                "line": 61
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1533,
                1534
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 61
                },
                "start": {
                  "column": 55,
                  "line": 61
                }
              }
            },
            "range": [
              1533,
              1534
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 61
              },
              "start": {
                "column": 55,
                "line": 61
              }
            }
          },
          "range": [
            1499,
            1542
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 61
            },
            "start": {
              "column": 21,
              "line": 61
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bounds",
            "optional": false,
            "range": [
              1545,
              1551
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 61
              },
              "start": {
                "column": 67,
                "line": 61
              }
            }
          },
          "range": [
            1545,
            1551
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 61
            },
            "start": {
              "column": 67,
              "line": 61
            }
          }
        },
        "range": [
          1476,
          1554
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 26,
            "line": 60
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 60
          },
          "start": {
            "column": 20,
            "line": 60
          }
        },
        "range": [
          1470,
          1473
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
                1471,
                1472
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 60
                },
                "start": {
                  "column": 21,
                  "line": 60
                }
              }
            },
            "out": false,
            "range": [
              1471,
              1472
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 60
              },
              "start": {
                "column": 21,
                "line": 60
              }
            }
          }
        ]
      },
      "range": [
        1450,
        1554
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 60
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
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "boundsForKey",
                        "optional": false,
                        "range": [
                          1696,
                          1708
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 66
                          },
                          "start": {
                            "column": 14,
                            "line": 66
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bounds",
                          "optional": false,
                          "range": [
                            1711,
                            1717
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 66
                            },
                            "start": {
                              "column": 29,
                              "line": 66
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              1718,
                              1721
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 66
                              },
                              "start": {
                                "column": 36,
                                "line": 66
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1746,
                                  1749
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
                                        1747,
                                        1748
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 66,
                                          "line": 66
                                        },
                                        "start": {
                                          "column": 65,
                                          "line": 66
                                        }
                                      }
                                    },
                                    "range": [
                                      1747,
                                      1748
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 66
                                      },
                                      "start": {
                                        "column": 65,
                                        "line": 66
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 66
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NumericBoundsOf",
                                "optional": false,
                                "range": [
                                  1731,
                                  1746
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 66
                                  }
                                }
                              },
                              "range": [
                                1731,
                                1749
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 66
                                },
                                "start": {
                                  "column": 49,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              1725,
                              1749
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 66
                              },
                              "start": {
                                "column": 43,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1718,
                            1749
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 66
                            },
                            "start": {
                              "column": 36,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1711,
                          1750
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 66
                          },
                          "start": {
                            "column": 29,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1696,
                        1750
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 66
                        },
                        "start": {
                          "column": 14,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    1690,
                    1751
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
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
                                    "name": "min",
                                    "optional": false,
                                    "range": [
                                      1800,
                                      1803
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 68
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 68
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
                                    "name": "min",
                                    "optional": false,
                                    "range": [
                                      1800,
                                      1803
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 68
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 68
                                      }
                                    }
                                  },
                                  "range": [
                                    1800,
                                    1803
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 68
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 68
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "range": [
                                      1805,
                                      1808
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 68
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 68
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
                                    "name": "max",
                                    "optional": false,
                                    "range": [
                                      1805,
                                      1808
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 68
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 68
                                      }
                                    }
                                  },
                                  "range": [
                                    1805,
                                    1808
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 68
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 68
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1798,
                                1810
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 68
                                },
                                "start": {
                                  "column": 18,
                                  "line": 68
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "boundsForKey",
                              "optional": false,
                              "range": [
                                1813,
                                1825
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 68
                                },
                                "start": {
                                  "column": 33,
                                  "line": 68
                                }
                              }
                            },
                            "range": [
                              1798,
                              1825
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 68
                              },
                              "start": {
                                "column": 18,
                                "line": 68
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1792,
                          1826
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              1874,
                              1879
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 69
                              },
                              "start": {
                                "column": 47,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            1867,
                            1880
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 69
                            },
                            "start": {
                              "column": 40,
                              "line": 69
                            }
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "operator": "||",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "min",
                              "optional": false,
                              "range": [
                                1843,
                                1846
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 69
                                },
                                "start": {
                                  "column": 16,
                                  "line": 69
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                1849,
                                1852
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 69
                                },
                                "start": {
                                  "column": 22,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              1843,
                              1852
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 69
                              },
                              "start": {
                                "column": 16,
                                "line": 69
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "max",
                              "optional": false,
                              "range": [
                                1856,
                                1859
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 69
                                },
                                "start": {
                                  "column": 29,
                                  "line": 69
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                1862,
                                1865
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 69
                                },
                                "start": {
                                  "column": 35,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              1856,
                              1865
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 69
                              },
                              "start": {
                                "column": 29,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            1843,
                            1865
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 69
                            },
                            "start": {
                              "column": 16,
                              "line": 69
                            }
                          }
                        },
                        "range": [
                          1839,
                          1880
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 69
                          },
                          "start": {
                            "column": 12,
                            "line": 69
                          }
                        }
                      }
                    ],
                    "range": [
                      1778,
                      1890
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 70
                      },
                      "start": {
                        "column": 26,
                        "line": 67
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boundsForKey",
                    "optional": false,
                    "range": [
                      1764,
                      1776
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 67
                      },
                      "start": {
                        "column": 12,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1760,
                    1890
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                1680,
                1896
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 50,
                  "line": 65
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          1646,
                          1649
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 65
                          },
                          "start": {
                            "column": 16,
                            "line": 65
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          1651,
                          1654
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 65
                          },
                          "start": {
                            "column": 21,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      1645,
                      1655
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 65
                      },
                      "start": {
                        "column": 15,
                        "line": 65
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1645,
                    1655
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 65
                    },
                    "start": {
                      "column": 15,
                      "line": 65
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1639,
                1655
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    1674,
                    1677
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 65
                    },
                    "start": {
                      "column": 44,
                      "line": 65
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
                  "name": "Object",
                  "optional": false,
                  "range": [
                    1659,
                    1665
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 65
                    },
                    "start": {
                      "column": 29,
                      "line": 65
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entries",
                  "optional": false,
                  "range": [
                    1666,
                    1673
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 65
                    },
                    "start": {
                      "column": 36,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1659,
                  1673
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 65
                  },
                  "start": {
                    "column": 29,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "range": [
                1659,
                1678
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 65
                },
                "start": {
                  "column": 29,
                  "line": 65
                }
              }
            },
            "range": [
              1634,
              1896
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1908,
                1912
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 72
                },
                "start": {
                  "column": 11,
                  "line": 72
                }
              }
            },
            "range": [
              1901,
              1913
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1628,
          1915
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 72,
            "line": 64
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "range": [
          1565,
          1573
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 64
          },
          "start": {
            "column": 9,
            "line": 64
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 64
              },
              "start": {
                "column": 39,
                "line": 64
              }
            },
            "range": [
              1595,
              1598
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1597,
                  1598
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 64
                  },
                  "start": {
                    "column": 41,
                    "line": 64
                  }
                }
              },
              "range": [
                1597,
                1598
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 64
                },
                "start": {
                  "column": 41,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1592,
            1598
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 64
            },
            "start": {
              "column": 36,
              "line": 64
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bounds",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 70,
                "line": 64
              },
              "start": {
                "column": 50,
                "line": 64
              }
            },
            "range": [
              1606,
              1626
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1623,
                  1626
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
                        1624,
                        1625
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 64
                        },
                        "start": {
                          "column": 68,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1624,
                      1625
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 64
                      },
                      "start": {
                        "column": 68,
                        "line": 64
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 64
                  },
                  "start": {
                    "column": 67,
                    "line": 64
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericBoundsOf",
                "optional": false,
                "range": [
                  1608,
                  1623
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 64
                  },
                  "start": {
                    "column": 52,
                    "line": 64
                  }
                }
              },
              "range": [
                1608,
                1626
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 64
                },
                "start": {
                  "column": 52,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1600,
            1626
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 64
            },
            "start": {
              "column": 44,
              "line": 64
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 64
          },
          "start": {
            "column": 17,
            "line": 64
          }
        },
        "range": [
          1573,
          1591
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                1584,
                1590
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 64
                },
                "start": {
                  "column": 28,
                  "line": 64
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
                1574,
                1575
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 64
                },
                "start": {
                  "column": 18,
                  "line": 64
                }
              }
            },
            "out": false,
            "range": [
              1574,
              1590
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 64
              },
              "start": {
                "column": 18,
                "line": 64
              }
            }
          }
        ]
      },
      "range": [
        1556,
        1915
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectWithUnderscoredKeys",
        "optional": false,
        "range": [
          1944,
          1969
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 77
          },
          "start": {
            "column": 5,
            "line": 77
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              2002,
              2003
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 78
              },
              "start": {
                "column": 10,
                "line": 78
              }
            }
          },
          "range": [
            2002,
            2003
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 78
            },
            "start": {
              "column": 10,
              "line": 78
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            1997,
            1998
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 78
            },
            "start": {
              "column": 5,
              "line": 78
            }
          }
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "_",
                "raw": "_"
              },
              "range": [
                2007,
                2011
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 78
                },
                "start": {
                  "column": 15,
                  "line": 78
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                2012,
                2014
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 78
                },
                "start": {
                  "column": 20,
                  "line": 78
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  2011,
                  2012
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 78
                  },
                  "start": {
                    "column": 19,
                    "line": 78
                  }
                }
              },
              "range": [
                2011,
                2012
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 78
                },
                "start": {
                  "column": 19,
                  "line": 78
                }
              }
            }
          ],
          "range": [
            2007,
            2014
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 78
            },
            "start": {
              "column": 15,
              "line": 78
            }
          }
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              2017,
              2021
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 78
              },
              "start": {
                "column": 25,
                "line": 78
              }
            }
          },
          "range": [
            2017,
            2021
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 78
            },
            "start": {
              "column": 25,
              "line": 78
            }
          }
        },
        "range": [
          1990,
          2024
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 51,
            "line": 77
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 77
          },
          "start": {
            "column": 30,
            "line": 77
          }
        },
        "range": [
          1969,
          1987
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                1980,
                1986
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 77
                },
                "start": {
                  "column": 41,
                  "line": 77
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1970,
                1971
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 77
                },
                "start": {
                  "column": 31,
                  "line": 77
                }
              }
            },
            "out": false,
            "range": [
              1970,
              1986
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 77
              },
              "start": {
                "column": 31,
                "line": 77
              }
            }
          }
        ]
      },
      "range": [
        1939,
        2025
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 77
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
                  "name": "shouldBeTrue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 82
                      },
                      "start": {
                        "column": 20,
                        "line": 82
                      }
                    },
                    "range": [
                      2153,
                      2159
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          2155,
                          2159
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 82
                          },
                          "start": {
                            "column": 22,
                            "line": 82
                          }
                        }
                      },
                      "range": [
                        2155,
                        2159
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 82
                        },
                        "start": {
                          "column": 22,
                          "line": 82
                        }
                      }
                    }
                  },
                  "range": [
                    2141,
                    2159
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objectWithUnderscoredKeys",
                    "optional": false,
                    "range": [
                      2162,
                      2187
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 82
                      },
                      "start": {
                        "column": 29,
                        "line": 82
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "TemplateLiteral",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          2192,
                          2195
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 82
                          },
                          "start": {
                            "column": 59,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "_",
                          "raw": "_"
                        },
                        "range": [
                          2188,
                          2192
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 82
                          },
                          "start": {
                            "column": 55,
                            "line": 82
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          2195,
                          2197
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 82
                          },
                          "start": {
                            "column": 62,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "range": [
                      2188,
                      2197
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 82
                      },
                      "start": {
                        "column": 55,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    2162,
                    2198
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 82
                    },
                    "start": {
                      "column": 29,
                      "line": 82
                    }
                  }
                },
                "range": [
                  2141,
                  2198
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 82
                  },
                  "start": {
                    "column": 8,
                    "line": 82
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2135,
              2199
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 82
              },
              "start": {
                "column": 2,
                "line": 82
              }
            }
          }
        ],
        "range": [
          2131,
          2253
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 104,
            "line": 81
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericTest",
        "optional": false,
        "range": [
          2036,
          2047
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 81
          },
          "start": {
            "column": 9,
            "line": 81
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objectWithUnderscoredKeys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 94,
                "line": 81
              },
              "start": {
                "column": 64,
                "line": 81
              }
            },
            "range": [
              2091,
              2121
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2118,
                  2121
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        2119,
                        2120
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 81
                        },
                        "start": {
                          "column": 92,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      2119,
                      2120
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 81
                      },
                      "start": {
                        "column": 92,
                        "line": 81
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 81
                  },
                  "start": {
                    "column": 91,
                    "line": 81
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectWithUnderscoredKeys",
                "optional": false,
                "range": [
                  2093,
                  2118
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 81
                  },
                  "start": {
                    "column": 66,
                    "line": 81
                  }
                }
              },
              "range": [
                2093,
                2121
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 81
                },
                "start": {
                  "column": 66,
                  "line": 81
                }
              }
            }
          },
          "range": [
            2066,
            2121
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 81
            },
            "start": {
              "column": 39,
              "line": 81
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 102,
                "line": 81
              },
              "start": {
                "column": 99,
                "line": 81
              }
            },
            "range": [
              2126,
              2129
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  2128,
                  2129
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 81
                  },
                  "start": {
                    "column": 101,
                    "line": 81
                  }
                }
              },
              "range": [
                2128,
                2129
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 81
                },
                "start": {
                  "column": 101,
                  "line": 81
                }
              }
            }
          },
          "range": [
            2123,
            2129
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 81
            },
            "start": {
              "column": 96,
              "line": 81
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 81
          },
          "start": {
            "column": 20,
            "line": 81
          }
        },
        "range": [
          2047,
          2065
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                2058,
                2064
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 81
                },
                "start": {
                  "column": 31,
                  "line": 81
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                2048,
                2049
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 81
                },
                "start": {
                  "column": 21,
                  "line": 81
                }
              }
            },
            "out": false,
            "range": [
              2048,
              2064
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 81
              },
              "start": {
                "column": 21,
                "line": 81
              }
            }
          }
        ]
      },
      "range": [
        2027,
        2253
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 84
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
