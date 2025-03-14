__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    1034
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        155
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            48,
            155
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "range": [
                  54,
                  62
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
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  62,
                  85
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        },
                        "range": [
                          73,
                          76
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              75,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 25,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            75,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 25,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        65,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    },
                    "range": [
                      78,
                      85
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        81,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    64,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                54,
                86
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "range": [
                  91,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
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
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                },
                "range": [
                  97,
                  153
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
                        "name": "nestedCallback",
                        "optional": false,
                        "range": [
                          109,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
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
                            "column": 45,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        },
                        "range": [
                          123,
                          146
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "response",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 6
                                  }
                                },
                                "range": [
                                  134,
                                  137
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      136,
                                      137
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    136,
                                    137
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 6
                                    }
                                  }
                                }
                              },
                              "range": [
                                126,
                                137
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 6
                              },
                              "start": {
                                "column": 38,
                                "line": 6
                              }
                            },
                            "range": [
                              139,
                              146
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                142,
                                146
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 6
                                },
                                "start": {
                                  "column": 41,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            125,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
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
                        109,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
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
                    99,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                91,
                153
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
          "name": "Event",
          "optional": false,
          "range": [
            39,
            44
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 17,
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
          29,
          155
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        157,
        230
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CustomEvents",
          "optional": false,
          "range": [
            169,
            181
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
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
                  190,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
                  }
                },
                "range": [
                  191,
                  206
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      198,
                      206
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          199,
                          205
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
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                    "name": "Event",
                    "optional": false,
                    "range": [
                      193,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 7,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    193,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                190,
                206
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  211,
                  212
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
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                },
                "range": [
                  212,
                  227
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      219,
                      227
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          220,
                          226
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
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                    "name": "Event",
                    "optional": false,
                    "range": [
                      214,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 7,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    214,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                211,
                227
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
            184,
            229
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 27,
              "line": 10
            }
          }
        },
        "range": [
          164,
          230
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 13
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
          "column": 2,
          "line": 13
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
        "name": "emit",
        "optional": false,
        "range": [
          249,
          253
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 15
              },
              "start": {
                "column": 56,
                "line": 15
              }
            },
            "range": [
              288,
              291
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  290,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 15
                  },
                  "start": {
                    "column": 58,
                    "line": 15
                  }
                }
              },
              "range": [
                290,
                291
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 15
                },
                "start": {
                  "column": 58,
                  "line": 15
                }
              }
            }
          },
          "range": [
            284,
            291
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 15
            },
            "start": {
              "column": 52,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 82,
                "line": 15
              },
              "start": {
                "column": 65,
                "line": 15
              }
            },
            "range": [
              297,
              314
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    312,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 15
                    },
                    "start": {
                      "column": 80,
                      "line": 15
                    }
                  }
                },
                "range": [
                  312,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 15
                  },
                  "start": {
                    "column": 80,
                    "line": 15
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "range": [
                    299,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 15
                    },
                    "start": {
                      "column": 67,
                      "line": 15
                    }
                  }
                },
                "range": [
                  299,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 15
                  },
                  "start": {
                    "column": 67,
                    "line": 15
                  }
                }
              },
              "range": [
                299,
                314
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 15
                },
                "start": {
                  "column": 67,
                  "line": 15
                }
              }
            }
          },
          "range": [
            293,
            314
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 15
            },
            "start": {
              "column": 61,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 89,
            "line": 15
          },
          "start": {
            "column": 83,
            "line": 15
          }
        },
        "range": [
          315,
          321
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            317,
            321
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 15
            },
            "start": {
              "column": 85,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 15
          },
          "start": {
            "column": 21,
            "line": 15
          }
        },
        "range": [
          253,
          283
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "range": [
                    270,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 15
                    },
                    "start": {
                      "column": 38,
                      "line": 15
                    }
                  }
                },
                "range": [
                  270,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 15
                  },
                  "start": {
                    "column": 38,
                    "line": 15
                  }
                }
              },
              "range": [
                264,
                282
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 15
                },
                "start": {
                  "column": 32,
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
                254,
                255
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              254,
              282
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 15
              },
              "start": {
                "column": 22,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        232,
        321
      ],
      "loc": {
        "end": {
          "column": 89,
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
            "type": "Literal",
            "raw": "'a'",
            "value": "a",
            "range": [
              328,
              331
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 17
              },
              "start": {
                "column": 5,
                "line": 17
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "range": [
                    339,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
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
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      356,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 21,
                        "line": 18
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
                      "name": "r",
                      "optional": false,
                      "range": [
                        350,
                        351
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
                    }
                  ],
                  "range": [
                    349,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 18
                    }
                  }
                },
                "range": [
                  339,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "range": [
                    364,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nestedCallback",
                        "optional": false,
                        "range": [
                          382,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
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
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            405,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 20
                            },
                            "start": {
                              "column": 31,
                              "line": 20
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
                            "name": "r",
                            "optional": false,
                            "range": [
                              399,
                              400
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 20
                              },
                              "start": {
                                "column": 25,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          398,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 20
                          },
                          "start": {
                            "column": 24,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        382,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    372,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  364,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              333,
              417
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
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
          "name": "emit",
          "optional": false,
          "range": [
            323,
            327
          ],
          "loc": {
            "end": {
              "column": 4,
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
          323,
          418
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        323,
        419
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          501,
          523
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compile",
              "optional": false,
              "range": [
                505,
                512
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 2,
                  "line": 26
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                512,
                521
              ],
              "async": false,
              "body": null,
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
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                },
                "range": [
                  514,
                  520
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    516,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 18,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "range": [
              505,
              521
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 25,
            "line": 25
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyCompiler",
        "optional": false,
        "range": [
          490,
          500
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 25
          },
          "start": {
            "column": 14,
            "line": 25
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        476,
        523
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          556,
          600
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "range": [
                560,
                565
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
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
                  "column": 39,
                  "line": 29
                },
                "start": {
                  "column": 7,
                  "line": 29
                }
              },
              "range": [
                565,
                597
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "compiler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 29
                        },
                        "start": {
                          "column": 18,
                          "line": 29
                        }
                      },
                      "range": [
                        576,
                        588
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyCompiler",
                          "optional": false,
                          "range": [
                            578,
                            588
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 29
                            },
                            "start": {
                              "column": 20,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          578,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      568,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 29
                      },
                      "start": {
                        "column": 10,
                        "line": 29
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 29
                    },
                    "start": {
                      "column": 32,
                      "line": 29
                    }
                  },
                  "range": [
                    590,
                    597
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      593,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 29
                      },
                      "start": {
                        "column": 35,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  567,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 29
                  },
                  "start": {
                    "column": 9,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              560,
              598
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 32,
            "line": 28
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebpackPluginInstance",
        "optional": false,
        "range": [
          534,
          555
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 28
          },
          "start": {
            "column": 10,
            "line": 28
          }
        }
      },
      "range": [
        524,
        600
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebpackPluginFunction",
        "optional": false,
        "range": [
          606,
          627
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 31
                },
                "start": {
                  "column": 34,
                  "line": 31
                }
              },
              "range": [
                635,
                647
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "range": [
                    637,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 31
                    },
                    "start": {
                      "column": 36,
                      "line": 31
                    }
                  }
                },
                "range": [
                  637,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 31
                  },
                  "start": {
                    "column": 36,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              631,
              647
            ],
            "loc": {
              "end": {
                "column": 46,
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
            "name": "compiler",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 31
                },
                "start": {
                  "column": 56,
                  "line": 31
                }
              },
              "range": [
                657,
                669
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "range": [
                    659,
                    669
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
                  659,
                  669
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
              }
            },
            "range": [
              649,
              669
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 31
              },
              "start": {
                "column": 48,
                "line": 31
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 77,
              "line": 31
            },
            "start": {
              "column": 70,
              "line": 31
            }
          },
          "range": [
            671,
            678
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              674,
              678
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 31
              },
              "start": {
                "column": 73,
                "line": 31
              }
            }
          }
        },
        "range": [
          630,
          678
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 31
          },
          "start": {
            "column": 29,
            "line": 31
          }
        }
      },
      "range": [
        601,
        679
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          703,
          771
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "minimizer",
              "optional": false,
              "range": [
                707,
                716
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
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
                  "column": 63,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              },
              "range": [
                717,
                768
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WebpackPluginInstance",
                        "optional": false,
                        "range": [
                          720,
                          741
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 33
                          },
                          "start": {
                            "column": 15,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        720,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 33
                        },
                        "start": {
                          "column": 15,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WebpackPluginFunction",
                        "optional": false,
                        "range": [
                          744,
                          765
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 33
                          },
                          "start": {
                            "column": 39,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        744,
                        765
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 33
                        },
                        "start": {
                          "column": 39,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    720,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 33
                    },
                    "start": {
                      "column": 15,
                      "line": 33
                    }
                  }
                },
                "range": [
                  719,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 33
                  },
                  "start": {
                    "column": 14,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              707,
              769
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 23,
            "line": 32
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Optimization",
        "optional": false,
        "range": [
          690,
          702
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 32
          },
          "start": {
            "column": 10,
            "line": 32
          }
        }
      },
      "range": [
        680,
        771
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 39
                },
                "start": {
                  "column": 15,
                  "line": 35
                }
              },
              "range": [
                787,
                865
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 8,
                          "line": 36
                        },
                        "start": {
                          "column": 5,
                          "line": 36
                        }
                      },
                      "range": [
                        818,
                        821
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            820,
                            821
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 36
                            },
                            "start": {
                              "column": 7,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          820,
                          821
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 36
                          },
                          "start": {
                            "column": 7,
                            "line": 36
                          }
                        }
                      }
                    },
                    "range": [
                      815,
                      821
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 36
                      },
                      "start": {
                        "column": 2,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 37
                        },
                        "start": {
                          "column": 6,
                          "line": 37
                        }
                      },
                      "range": [
                        829,
                        832
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            831,
                            832
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 37
                            },
                            "start": {
                              "column": 8,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          831,
                          832
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
                          }
                        }
                      }
                    },
                    "range": [
                      825,
                      832
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 2,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "factory",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 38
                        },
                        "start": {
                          "column": 9,
                          "line": 38
                        }
                      },
                      "range": [
                        843,
                        855
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 38
                            },
                            "start": {
                              "column": 14,
                              "line": 38
                            }
                          },
                          "range": [
                            848,
                            855
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
                                  853,
                                  854
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                853,
                                854
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 38
                                },
                                "start": {
                                  "column": 19,
                                  "line": 38
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
                                  851,
                                  852
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
                                851,
                                852
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
                              851,
                              855
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 38
                              },
                              "start": {
                                "column": 17,
                                "line": 38
                              }
                            }
                          }
                        },
                        "range": [
                          845,
                          855
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 38
                          },
                          "start": {
                            "column": 11,
                            "line": 38
                          }
                        }
                      }
                    },
                    "range": [
                      836,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 38
                      },
                      "start": {
                        "column": 2,
                        "line": 38
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 39
                    },
                    "start": {
                      "column": 2,
                      "line": 39
                    }
                  },
                  "range": [
                    858,
                    865
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      861,
                      865
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 39
                      },
                      "start": {
                        "column": 5,
                        "line": 39
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 35
                    },
                    "start": {
                      "column": 17,
                      "line": 35
                    }
                  },
                  "range": [
                    789,
                    811
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
                          790,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 35
                          },
                          "start": {
                            "column": 18,
                            "line": 35
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        790,
                        791
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 35
                        },
                        "start": {
                          "column": 18,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
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
                              809,
                              810
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 35
                              },
                              "start": {
                                "column": 37,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            809,
                            810
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 35
                            },
                            "start": {
                              "column": 37,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          803,
                          810
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 35
                          },
                          "start": {
                            "column": 31,
                            "line": 35
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
                          793,
                          794
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 35
                          },
                          "start": {
                            "column": 21,
                            "line": 35
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        793,
                        810
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 35
                        },
                        "start": {
                          "column": 21,
                          "line": 35
                        }
                      }
                    }
                  ]
                },
                "range": [
                  789,
                  865
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 39
                  },
                  "start": {
                    "column": 17,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              786,
              865
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 39
              },
              "start": {
                "column": 14,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            786,
            865
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 39
            },
            "start": {
              "column": 14,
              "line": 35
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        772,
        866
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        867,
        1033
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "applyOptimizationDefaults",
              "optional": false,
              "range": [
                880,
                905
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 40
                },
                "start": {
                  "column": 13,
                  "line": 40
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
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optimization",
                          "optional": false,
                          "range": [
                            946,
                            958
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 41
                            },
                            "start": {
                              "column": 4,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"minimizer\"",
                          "value": "minimizer",
                          "range": [
                            960,
                            971
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 41
                            },
                            "start": {
                              "column": 18,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "apply",
                                      "optional": false,
                                      "range": [
                                        993,
                                        998
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 11,
                                          "line": 43
                                        },
                                        "start": {
                                          "column": 6,
                                          "line": 43
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
                                        "type": "BlockStatement",
                                        "body": [],
                                        "range": [
                                          1014,
                                          1016
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 43
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 43
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
                                          "name": "compiler",
                                          "optional": false,
                                          "range": [
                                            1001,
                                            1009
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 22,
                                              "line": 43
                                            },
                                            "start": {
                                              "column": 14,
                                              "line": 43
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        1000,
                                        1016
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 43
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 43
                                        }
                                      }
                                    },
                                    "range": [
                                      993,
                                      1016
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 43
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  985,
                                  1023
                                ],
                                "loc": {
                                  "end": {
                                    "column": 5,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 42
                                  }
                                }
                              }
                            ],
                            "range": [
                              979,
                              1028
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 45
                              },
                              "start": {
                                "column": 37,
                                "line": 41
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            973,
                            1028
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 45
                            },
                            "start": {
                              "column": 31,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          944,
                          945
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 41
                          },
                          "start": {
                            "column": 2,
                            "line": 41
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        944,
                        1029
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 45
                        },
                        "start": {
                          "column": 2,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      944,
                      1030
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 45
                      },
                      "start": {
                        "column": 2,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  940,
                  1032
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 46
                  },
                  "start": {
                    "column": 73,
                    "line": 40
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
                  "name": "optimization",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 40
                      },
                      "start": {
                        "column": 54,
                        "line": 40
                      }
                    },
                    "range": [
                      921,
                      935
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Optimization",
                        "optional": false,
                        "range": [
                          923,
                          935
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 40
                          },
                          "start": {
                            "column": 56,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        923,
                        935
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 40
                        },
                        "start": {
                          "column": 56,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    909,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 40
                    },
                    "start": {
                      "column": 42,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                908,
                1032
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 46
                },
                "start": {
                  "column": 41,
                  "line": 40
                }
              }
            },
            "range": [
              880,
              1032
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 46
              },
              "start": {
                "column": 13,
                "line": 40
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          874,
          1033
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 46
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
