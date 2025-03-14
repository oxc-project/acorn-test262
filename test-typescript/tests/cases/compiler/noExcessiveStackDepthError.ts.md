__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    320
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          48,
          63
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
                54,
                57
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                57,
                60
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  59,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              54,
              61
            ],
            "loc": {
              "end": {
                "column": 11,
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
            "column": 26,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FindOperator",
        "optional": false,
        "range": [
          32,
          44
        ],
        "loc": {
          "end": {
            "column": 22,
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
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        },
        "range": [
          44,
          47
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
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              45,
              46
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        63
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
        "name": "FindConditions",
        "optional": false,
        "range": [
          70,
          84
        ],
        "loc": {
          "end": {
            "column": 19,
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            102,
            109
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 10,
              "line": 8
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            97,
            98
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 8
            },
            "start": {
              "column": 5,
              "line": 8
            }
          }
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  127,
                  133
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          130,
                          131
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 8
                          },
                          "start": {
                            "column": 38,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        130,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 8
                        },
                        "start": {
                          "column": 38,
                          "line": 8
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
                          128,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 8
                          },
                          "start": {
                            "column": 36,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        128,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 8
                        },
                        "start": {
                          "column": 36,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      128,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 36,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FindConditions",
                "optional": false,
                "range": [
                  113,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              "range": [
                113,
                133
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  148,
                  170
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        163,
                        169
                      ],
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "range": [
                                166,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 8
                                },
                                "start": {
                                  "column": 74,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              166,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 8
                              },
                              "start": {
                                "column": 74,
                                "line": 8
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
                                164,
                                165
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 8
                                },
                                "start": {
                                  "column": 72,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              164,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 8
                              },
                              "start": {
                                "column": 72,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            164,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 8
                            },
                            "start": {
                              "column": 72,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 8
                        },
                        "start": {
                          "column": 71,
                          "line": 8
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FindConditions",
                      "optional": false,
                      "range": [
                        149,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 8
                        },
                        "start": {
                          "column": 57,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      149,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 8
                      },
                      "start": {
                        "column": 57,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 8
                  },
                  "start": {
                    "column": 56,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FindOperator",
                "optional": false,
                "range": [
                  136,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              },
              "range": [
                136,
                170
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 8
                },
                "start": {
                  "column": 44,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            113,
            170
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          }
        },
        "range": [
          90,
          173
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        },
        "range": [
          84,
          87
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
                85,
                86
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
            "out": false,
            "range": [
              85,
              86
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
        ]
      },
      "range": [
        65,
        174
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
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
                        "column": 30,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    },
                    "range": [
                      210,
                      231
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          226,
                          231
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              227,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 12
                              },
                              "start": {
                                "column": 26,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 12
                          },
                          "start": {
                            "column": 25,
                            "line": 12
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FindConditions",
                        "optional": false,
                        "range": [
                          212,
                          226
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 11,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        212,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
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
                    209,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": null,
                "range": [
                  209,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
              205,
              232
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    },
                    "range": [
                      242,
                      266
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          258,
                          266
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Entity",
                              "optional": false,
                              "range": [
                                259,
                                265
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 13
                                },
                                "start": {
                                  "column": 26,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              259,
                              265
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 13
                              },
                              "start": {
                                "column": 26,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 13
                          },
                          "start": {
                            "column": 25,
                            "line": 13
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FindConditions",
                        "optional": false,
                        "range": [
                          244,
                          258
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 11,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        244,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    241,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "init": null,
                "range": [
                  241,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              237,
              267
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          199,
          319
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 23,
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
        "name": "foo",
        "optional": false,
        "range": [
          185,
          188
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
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          188,
          196
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Entity",
              "optional": false,
              "range": [
                189,
                195
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              189,
              195
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        176,
        319
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
