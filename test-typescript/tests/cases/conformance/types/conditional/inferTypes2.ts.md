__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    573
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        23,
        99
      ],
      "attributes": [],
      "declaration": {
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
            47,
            50
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 24,
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
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
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
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
                    }
                  }
                },
                "range": [
                  59,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              54,
              60
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 75,
              "line": 3
            },
            "start": {
              "column": 38,
              "line": 3
            }
          },
          "range": [
            61,
            98
          ],
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  63,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              },
              "range": [
                63,
                64
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
                }
              }
            },
            "extendsType": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 3
                  },
                  "start": {
                    "column": 53,
                    "line": 3
                  }
                },
                "range": [
                  76,
                  86
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        85,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 3
                        },
                        "start": {
                          "column": 62,
                          "line": 3
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
                        "column": 63,
                        "line": 3
                      },
                      "start": {
                        "column": 62,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    79,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                73,
                86
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                93,
                98
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 3
                },
                "start": {
                  "column": 70,
                  "line": 3
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
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 66,
                    "line": 3
                  }
                }
              },
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 3
                },
                "start": {
                  "column": 66,
                  "line": 3
                }
              }
            },
            "range": [
              63,
              98
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          },
          "range": [
            50,
            53
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
                  51,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                51,
                52
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          30,
          99
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 3
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
          "column": 76,
          "line": 3
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
        100,
        155
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      148,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
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
                    144,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "range": [
                  144,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                137,
                153
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            131,
            155
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 31,
              "line": 4
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
            116,
            119
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
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
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              },
              "range": [
                126,
                129
              ],
              "typeAnnotation": {
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
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 28,
                      "line": 4
                    }
                  }
                },
                "range": [
                  128,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              123,
              129
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 23,
                "line": 4
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 22,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          },
          "range": [
            119,
            122
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
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                120,
                121
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          107,
          155
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        157,
        221
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BadNested",
          "optional": false,
          "range": [
            169,
            178
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
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
                "name": "x",
                "optional": false,
                "range": [
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 29,
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
                    "column": 61,
                    "line": 8
                  },
                  "start": {
                    "column": 30,
                    "line": 8
                  }
                },
                "range": [
                  187,
                  218
                ],
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        189,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      189,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    }
                  },
                  "extendsType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      199,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 42,
                        "line": 8
                      }
                    }
                  },
                  "falseType": {
                    "type": "TSStringKeyword",
                    "range": [
                      212,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 8
                      },
                      "start": {
                        "column": 55,
                        "line": 8
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        208,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 8
                        },
                        "start": {
                          "column": 51,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      208,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 8
                      },
                      "start": {
                        "column": 51,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    189,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 8
                    },
                    "start": {
                      "column": 32,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                186,
                218
              ],
              "loc": {
                "end": {
                  "column": 61,
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
            184,
            220
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 8
            },
            "start": {
              "column": 27,
              "line": 8
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          },
          "range": [
            178,
            181
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
                  179,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                179,
                180
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            }
          ]
        },
        "range": [
          164,
          221
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 64,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        223,
        345
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            247,
            251
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 10
            },
            "start": {
              "column": 24,
              "line": 10
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
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 35,
                  "line": 10
                }
              },
              "range": [
                258,
                261
              ],
              "typeAnnotation": {
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
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 37,
                      "line": 10
                    }
                  }
                },
                "range": [
                  260,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 37,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              255,
              261
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 32,
                "line": 10
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 121,
              "line": 10
            },
            "start": {
              "column": 39,
              "line": 10
            }
          },
          "range": [
            262,
            344
          ],
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  264,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 41,
                    "line": 10
                  }
                }
              },
              "range": [
                264,
                265
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 41,
                  "line": 10
                }
              }
            },
            "extendsType": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      297,
                      306
                    ],
                    "params": [
                      {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              304,
                              305
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 10
                              },
                              "start": {
                                "column": 81,
                                "line": 10
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            304,
                            305
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 10
                            },
                            "start": {
                              "column": 81,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          298,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 10
                          },
                          "start": {
                            "column": 75,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 10
                      },
                      "start": {
                        "column": 74,
                        "line": 10
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false,
                    "range": [
                      288,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 10
                      },
                      "start": {
                        "column": 65,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    288,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 10
                    },
                    "start": {
                      "column": 65,
                      "line": 10
                    }
                  }
                },
                "range": [
                  282,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 10
                  },
                  "start": {
                    "column": 59,
                    "line": 10
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  277,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 10
                  },
                  "start": {
                    "column": 54,
                    "line": 10
                  }
                }
              },
              "nameType": null,
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
                      328,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 10
                      },
                      "start": {
                        "column": 105,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    328,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 10
                    },
                    "start": {
                      "column": 105,
                      "line": 10
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      318,
                      327
                    ],
                    "params": [
                      {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              325,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 103,
                                "line": 10
                              },
                              "start": {
                                "column": 102,
                                "line": 10
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            325,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 103,
                              "line": 10
                            },
                            "start": {
                              "column": 102,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          319,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 103,
                            "line": 10
                          },
                          "start": {
                            "column": 96,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 10
                      },
                      "start": {
                        "column": 95,
                        "line": 10
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false,
                    "range": [
                      309,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 10
                      },
                      "start": {
                        "column": 86,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    309,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 10
                    },
                    "start": {
                      "column": 86,
                      "line": 10
                    }
                  }
                },
                "range": [
                  309,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 10
                  },
                  "start": {
                    "column": 86,
                    "line": 10
                  }
                }
              },
              "range": [
                274,
                332
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 10
                },
                "start": {
                  "column": 51,
                  "line": 10
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                339,
                344
              ],
              "loc": {
                "end": {
                  "column": 121,
                  "line": 10
                },
                "start": {
                  "column": 116,
                  "line": 10
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
                  335,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 10
                  },
                  "start": {
                    "column": 112,
                    "line": 10
                  }
                }
              },
              "range": [
                335,
                336
              ],
              "loc": {
                "end": {
                  "column": 113,
                  "line": 10
                },
                "start": {
                  "column": 112,
                  "line": 10
                }
              }
            },
            "range": [
              264,
              344
            ],
            "loc": {
              "end": {
                "column": 121,
                "line": 10
              },
              "start": {
                "column": 41,
                "line": 10
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 28,
              "line": 10
            }
          },
          "range": [
            251,
            254
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
                  252,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              },
              "out": false,
              "range": [
                252,
                253
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              }
            }
          ]
        },
        "range": [
          230,
          345
        ],
        "loc": {
          "end": {
            "column": 122,
            "line": 10
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
          "column": 122,
          "line": 10
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
        346,
        403
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      396,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "range": [
                    391,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  391,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                384,
                401
              ],
              "loc": {
                "end": {
                  "column": 21,
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
            378,
            403
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 32,
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
          "name": "bar2",
          "optional": false,
          "range": [
            362,
            366
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
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
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              },
              "range": [
                373,
                376
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    375,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
                    }
                  }
                },
                "range": [
                  375,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              370,
              376
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 20,
              "line": 11
            }
          },
          "range": [
            366,
            369
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
                  367,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                367,
                368
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          353,
          403
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weird",
        "optional": false,
        "range": [
          433,
          438
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "range": [
            441,
            444
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                459,
                460
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              459,
              460
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 31,
                "line": 17
              }
            }
          },
          "range": [
            453,
            460
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 17
            },
            "start": {
              "column": 25,
              "line": 17
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            467,
            472
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 17
            },
            "start": {
              "column": 39,
              "line": 17
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              463,
              464
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 35,
                "line": 17
              }
            }
          },
          "range": [
            463,
            464
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 17
            },
            "start": {
              "column": 35,
              "line": 17
            }
          }
        },
        "range": [
          441,
          472
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 17
          },
          "start": {
            "column": 13,
            "line": 17
          }
        }
      },
      "range": [
        428,
        473
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlsoWeird",
        "optional": false,
        "range": [
          479,
          488
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "range": [
            491,
            498
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 18
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                513,
                514
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 39,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              513,
              514
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 18
              },
              "start": {
                "column": 39,
                "line": 18
              }
            }
          },
          "range": [
            507,
            514
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 18
            },
            "start": {
              "column": 33,
              "line": 18
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            521,
            526
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 18
            },
            "start": {
              "column": 47,
              "line": 18
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              517,
              518
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 18
              },
              "start": {
                "column": 43,
                "line": 18
              }
            }
          },
          "range": [
            517,
            518
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 18
            },
            "start": {
              "column": 43,
              "line": 18
            }
          }
        },
        "range": [
          491,
          526
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "range": [
        474,
        527
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 7,
                  "line": 20
                }
              },
              "range": [
                536,
                543
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Weird",
                  "optional": false,
                  "range": [
                    538,
                    543
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 20
                    }
                  }
                },
                "range": [
                  538,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              535,
              543
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              546,
              550
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 17,
                "line": 20
              }
            }
          },
          "range": [
            535,
            550
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        529,
        551
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              },
              "range": [
                559,
                567
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  561,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              558,
              567
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              570,
              571
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 18,
                "line": 21
              }
            }
          },
          "range": [
            558,
            571
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        552,
        572
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
