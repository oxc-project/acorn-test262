__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    3720
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        10,
        49
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            32,
            49
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  38,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                },
                "range": [
                  43,
                  46
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      45,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    45,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                38,
                47
              ],
              "loc": {
                "end": {
                  "column": 13,
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
              "column": 22,
              "line": 3
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
            27,
            28
          ],
          "loc": {
            "end": {
              "column": 18,
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
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 18,
              "line": 3
            }
          },
          "range": [
            28,
            31
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  29,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                29,
                30
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          17,
          49
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
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
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
          97,
          100
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 46,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          60,
          62
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            },
            "range": [
              72,
              78
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  75,
                  78
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        76,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 7
                        },
                        "start": {
                          "column": 25,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      76,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  74,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "range": [
                74,
                78
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            }
          },
          "range": [
            66,
            78
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            },
            "range": [
              85,
              88
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  87,
                  88
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
              "range": [
                87,
                88
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
            }
          },
          "range": [
            80,
            88
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 7
          },
          "start": {
            "column": 39,
            "line": 7
          }
        },
        "range": [
          90,
          96
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            92,
            96
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 7
            },
            "start": {
              "column": 41,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        },
        "range": [
          62,
          65
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                63,
                64
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              63,
              64
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        51,
        100
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "name": "handlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              },
              "range": [
                122,
                150
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    125,
                    150
                  ],
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 10
                              },
                              "start": {
                                "column": 30,
                                "line": 10
                              }
                            },
                            "range": [
                              132,
                              140
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                134,
                                140
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
                          },
                          "range": [
                            127,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 10
                            },
                            "start": {
                              "column": 25,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 10
                          },
                          "start": {
                            "column": 40,
                            "line": 10
                          }
                        },
                        "range": [
                          142,
                          149
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            145,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 10
                            },
                            "start": {
                              "column": 43,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        126,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 10
                        },
                        "start": {
                          "column": 24,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    124,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                },
                "range": [
                  124,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              114,
              150
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            114,
            150
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        102,
        151
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "handlers",
            "optional": false,
            "range": [
              155,
              163
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    180,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 28,
                      "line": 11
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "alert",
                "optional": false,
                "range": [
                  174,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                174,
                186
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
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
                "name": "value",
                "optional": false,
                "range": [
                  165,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              165,
              186
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            152,
            154
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          152,
          187
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        152,
        188
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          224,
          276
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialValues",
              "optional": false,
              "range": [
                228,
                241
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 2,
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
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              },
              "range": [
                241,
                244
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    243,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "range": [
                  243,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              228,
              245
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "range": [
                248,
                258
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
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
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              },
              "range": [
                258,
                273
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cur",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      },
                      "range": [
                        264,
                        267
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            266,
                            267
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 17
                            },
                            "start": {
                              "column": 20,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          266,
                          267
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      261,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 23,
                      "line": 17
                    }
                  },
                  "range": [
                    269,
                    273
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        272,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 17
                        },
                        "start": {
                          "column": 26,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      272,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 26,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  260,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              248,
              274
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 17
              },
              "start": {
                "column": 2,
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
            "column": 23,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "range": [
          211,
          220
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 15
          },
          "start": {
            "column": 19,
            "line": 15
          }
        },
        "range": [
          220,
          223
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
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        201,
        276
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          304,
          340
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                306,
                317
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 40,
                  "line": 19
                },
                "start": {
                  "column": 29,
                  "line": 19
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                317,
                328
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
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
                        "column": 49,
                        "line": 19
                      },
                      "start": {
                        "column": 46,
                        "line": 19
                      }
                    },
                    "range": [
                      323,
                      326
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
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
                            "column": 49,
                            "line": 19
                          },
                          "start": {
                            "column": 48,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        325,
                        326
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 19
                        },
                        "start": {
                          "column": 48,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    318,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 19
                    },
                    "start": {
                      "column": 41,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 19
                },
                "start": {
                  "column": 40,
                  "line": 19
                }
              }
            },
            "range": [
              306,
              328
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 19
              },
              "start": {
                "column": 29,
                "line": 19
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "range": [
                329,
                334
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 19
                },
                "start": {
                  "column": 52,
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
                  "column": 60,
                  "line": 19
                },
                "start": {
                  "column": 57,
                  "line": 19
                }
              },
              "range": [
                334,
                337
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    336,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 19
                    },
                    "start": {
                      "column": 59,
                      "line": 19
                    }
                  }
                },
                "range": [
                  336,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 19
                  },
                  "start": {
                    "column": 59,
                    "line": 19
                  }
                }
              }
            },
            "value": null,
            "range": [
              329,
              338
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 19
              },
              "start": {
                "column": 52,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 19
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          291,
          300
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 14,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 19
          },
          "start": {
            "column": 23,
            "line": 19
          }
        },
        "range": [
          300,
          303
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                301,
                302
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              301,
              302
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 24,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        277,
        340
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          450,
          467
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
              "name": "iv",
              "optional": false,
              "range": [
                454,
                456
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
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
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              },
              "range": [
                456,
                464
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "range": [
                    458,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 6,
                      "line": 22
                    }
                  }
                },
                "range": [
                  458,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 22
                  },
                  "start": {
                    "column": 6,
                    "line": 22
                  }
                }
              }
            },
            "value": null,
            "range": [
              454,
              465
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 49,
            "line": 21
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "range": [
          355,
          371
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 20
          },
          "start": {
            "column": 14,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          413,
          422
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 21
          },
          "start": {
            "column": 12,
            "line": 21
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          422,
          449
        ],
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "range": [
                    423,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 21
                    },
                    "start": {
                      "column": 22,
                      "line": 21
                    }
                  }
                },
                "range": [
                  423,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 21
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    440,
                    448
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "range": [
                          441,
                          447
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 21
                          },
                          "start": {
                            "column": 40,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        441,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 21
                        },
                        "start": {
                          "column": 40,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 21
                    },
                    "start": {
                      "column": 39,
                      "line": 21
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "range": [
                    431,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 21
                    },
                    "start": {
                      "column": 30,
                      "line": 21
                    }
                  }
                },
                "range": [
                  431,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 21
                  },
                  "start": {
                    "column": 30,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              423,
              448
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 21
          },
          "start": {
            "column": 21,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 20
          },
          "start": {
            "column": 30,
            "line": 20
          }
        },
        "range": [
          371,
          400
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                380,
                382
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 39,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "range": [
                372,
                377
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 20
                },
                "start": {
                  "column": 31,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              372,
              382
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 31,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSObjectKeyword",
              "range": [
                393,
                399
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 20
                },
                "start": {
                  "column": 52,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "range": [
                384,
                390
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 20
                },
                "start": {
                  "column": 43,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              384,
              399
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 20
              },
              "start": {
                "column": 43,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        341,
        467
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
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
                  "name": "initialValues",
                  "optional": false,
                  "range": [
                    492,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 25
                    },
                    "start": {
                      "column": 23,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    507,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 25
                    },
                    "start": {
                      "column": 38,
                      "line": 25
                    }
                  }
                },
                "range": [
                  492,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 25
                  },
                  "start": {
                    "column": 23,
                    "line": 25
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nextValues",
                  "optional": false,
                  "range": [
                    511,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 25
                    },
                    "start": {
                      "column": 42,
                      "line": 25
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
                    "type": "Literal",
                    "raw": "12",
                    "value": 12,
                    "range": [
                      530,
                      532
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 25
                      },
                      "start": {
                        "column": 61,
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
                      "name": "val",
                      "optional": false,
                      "range": [
                        523,
                        526
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 25
                        },
                        "start": {
                          "column": 54,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    523,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 25
                    },
                    "start": {
                      "column": 54,
                      "line": 25
                    }
                  }
                },
                "range": [
                  511,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 25
                  },
                  "start": {
                    "column": 42,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              490,
              534
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 25
              },
              "start": {
                "column": 21,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericComponent",
          "optional": false,
          "range": [
            473,
            489
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "range": [
          469,
          535
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        469,
        536
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
        "name": "useStringOrNumber",
        "optional": false,
        "range": [
          566,
          583
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 29
          }
        }
      },
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
                "column": 66,
                "line": 29
              },
              "start": {
                "column": 63,
                "line": 29
              }
            },
            "range": [
              612,
              615
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  614,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 29
                  },
                  "start": {
                    "column": 65,
                    "line": 29
                  }
                }
              },
              "range": [
                614,
                615
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 29
                },
                "start": {
                  "column": 65,
                  "line": 29
                }
              }
            }
          },
          "range": [
            611,
            615
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 29
            },
            "start": {
              "column": 62,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "useIt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 139,
                "line": 29
              },
              "start": {
                "column": 73,
                "line": 29
              }
            },
            "range": [
              622,
              688
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
                    624,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 29
                    },
                    "start": {
                      "column": 75,
                      "line": 29
                    }
                  }
                },
                "range": [
                  624,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 29
                  },
                  "start": {
                    "column": 75,
                    "line": 29
                  }
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "range": [
                  634,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 29
                  },
                  "start": {
                    "column": 85,
                    "line": 29
                  }
                }
              },
              "falseType": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 129,
                          "line": 29
                        },
                        "start": {
                          "column": 121,
                          "line": 29
                        }
                      },
                      "range": [
                        670,
                        678
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          672,
                          678
                        ],
                        "loc": {
                          "end": {
                            "column": 129,
                            "line": 29
                          },
                          "start": {
                            "column": 123,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      669,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 129,
                        "line": 29
                      },
                      "start": {
                        "column": 120,
                        "line": 29
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 138,
                      "line": 29
                    },
                    "start": {
                      "column": 131,
                      "line": 29
                    }
                  },
                  "range": [
                    680,
                    687
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      683,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 138,
                        "line": 29
                      },
                      "start": {
                        "column": 134,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  668,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 138,
                    "line": 29
                  },
                  "start": {
                    "column": 119,
                    "line": 29
                  }
                }
              },
              "trueType": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 105,
                          "line": 29
                        },
                        "start": {
                          "column": 97,
                          "line": 29
                        }
                      },
                      "range": [
                        646,
                        654
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          648,
                          654
                        ],
                        "loc": {
                          "end": {
                            "column": 105,
                            "line": 29
                          },
                          "start": {
                            "column": 99,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      645,
                      654
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 29
                      },
                      "start": {
                        "column": 96,
                        "line": 29
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 29
                    },
                    "start": {
                      "column": 107,
                      "line": 29
                    }
                  },
                  "range": [
                    656,
                    663
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      659,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 29
                      },
                      "start": {
                        "column": 110,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  644,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 29
                  },
                  "start": {
                    "column": 95,
                    "line": 29
                  }
                }
              },
              "range": [
                624,
                688
              ],
              "loc": {
                "end": {
                  "column": 139,
                  "line": 29
                },
                "start": {
                  "column": 75,
                  "line": 29
                }
              }
            }
          },
          "range": [
            617,
            688
          ],
          "loc": {
            "end": {
              "column": 139,
              "line": 29
            },
            "start": {
              "column": 68,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 146,
            "line": 29
          },
          "start": {
            "column": 140,
            "line": 29
          }
        },
        "range": [
          689,
          695
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            691,
            695
          ],
          "loc": {
            "end": {
              "column": 146,
              "line": 29
            },
            "start": {
              "column": 142,
              "line": 29
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 29
          },
          "start": {
            "column": 34,
            "line": 29
          }
        },
        "range": [
          583,
          610
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    594,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 29
                    },
                    "start": {
                      "column": 45,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    603,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 29
                    },
                    "start": {
                      "column": 54,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                594,
                609
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 29
                },
                "start": {
                  "column": 45,
                  "line": 29
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
                584,
                585
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 29
                },
                "start": {
                  "column": 35,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              584,
              609
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 29
              },
              "start": {
                "column": 35,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        549,
        696
      ],
      "loc": {
        "end": {
          "column": 147,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "raw": "\"\"",
            "value": "",
            "range": [
              715,
              717
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 18,
                "line": 30
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                726,
                728
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 30
                },
                "start": {
                  "column": 29,
                  "line": 30
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
                "name": "foo",
                "optional": false,
                "range": [
                  719,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 22,
                    "line": 30
                  }
                }
              }
            ],
            "range": [
              719,
              728
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "useStringOrNumber",
          "optional": false,
          "range": [
            697,
            714
          ],
          "loc": {
            "end": {
              "column": 17,
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
          697,
          729
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        697,
        730
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "range": [
          748,
          758
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              764,
              770
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 34
              },
              "start": {
                "column": 21,
                "line": 34
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attachPayloadTypeHack",
                  "optional": false,
                  "range": [
                    775,
                    796
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 34
                    },
                    "start": {
                      "column": 32,
                      "line": 34
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
                      "column": 65,
                      "line": 34
                    },
                    "start": {
                      "column": 54,
                      "line": 34
                    }
                  },
                  "range": [
                    797,
                    808
                  ],
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            799,
                            800
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 34
                            },
                            "start": {
                              "column": 56,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          799,
                          800
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 34
                          },
                          "start": {
                            "column": 56,
                            "line": 34
                          }
                        }
                      },
                      {
                        "type": "TSNeverKeyword",
                        "range": [
                          803,
                          808
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 34
                          },
                          "start": {
                            "column": 60,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      799,
                      808
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 34
                      },
                      "start": {
                        "column": 56,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  775,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 34
                  },
                  "start": {
                    "column": 32,
                    "line": 34
                  }
                }
              }
            ],
            "range": [
              773,
              810
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 34
              },
              "start": {
                "column": 30,
                "line": 34
              }
            }
          }
        ],
        "range": [
          764,
          810
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 34
          },
          "start": {
            "column": 21,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 34
          },
          "start": {
            "column": 15,
            "line": 34
          }
        },
        "range": [
          758,
          761
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                759,
                760
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 34
                },
                "start": {
                  "column": 16,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              759,
              760
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 34
              },
              "start": {
                "column": 16,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        743,
        810
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Handler",
        "optional": false,
        "range": [
          817,
          824
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              833,
              834
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 36
              },
              "start": {
                "column": 21,
                "line": 36
              }
            }
          },
          "range": [
            833,
            834
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 36
            },
            "start": {
              "column": 21,
              "line": 36
            }
          }
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "range": [
            843,
            847
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 36
            },
            "start": {
              "column": 31,
              "line": 36
            }
          }
        },
        "falseType": {
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
                    "column": 15,
                    "line": 38
                  },
                  "start": {
                    "column": 12,
                    "line": 38
                  }
                },
                "range": [
                  882,
                  885
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      884,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 38
                      },
                      "start": {
                        "column": 14,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    884,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 38
                    },
                    "start": {
                      "column": 14,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                877,
                885
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 38
                  },
                  "start": {
                    "column": 24,
                    "line": 38
                  }
                },
                "range": [
                  894,
                  897
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      896,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 38
                      },
                      "start": {
                        "column": 26,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    896,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 26,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                887,
                897
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 38
                },
                "start": {
                  "column": 17,
                  "line": 38
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 38
              },
              "start": {
                "column": 29,
                "line": 38
              }
            },
            "range": [
              899,
              903
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  902,
                  903
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 38
                  },
                  "start": {
                    "column": 32,
                    "line": 38
                  }
                }
              },
              "range": [
                902,
                903
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 38
                },
                "start": {
                  "column": 32,
                  "line": 38
                }
              }
            }
          },
          "range": [
            876,
            903
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        },
        "trueType": {
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
                    "column": 15,
                    "line": 37
                  },
                  "start": {
                    "column": 12,
                    "line": 37
                  }
                },
                "range": [
                  860,
                  863
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      862,
                      863
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 37
                      },
                      "start": {
                        "column": 14,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    862,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 37
                    },
                    "start": {
                      "column": 14,
                      "line": 37
                    }
                  }
                }
              },
              "range": [
                855,
                863
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 37
                },
                "start": {
                  "column": 7,
                  "line": 37
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 37
              },
              "start": {
                "column": 17,
                "line": 37
              }
            },
            "range": [
              865,
              869
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  868,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 37
                  },
                  "start": {
                    "column": 20,
                    "line": 37
                  }
                }
              },
              "range": [
                868,
                869
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 37
                },
                "start": {
                  "column": 20,
                  "line": 37
                }
              }
            }
          },
          "range": [
            854,
            869
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        },
        "range": [
          833,
          903
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 38
          },
          "start": {
            "column": 21,
            "line": 36
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 36
          },
          "start": {
            "column": 12,
            "line": 36
          }
        },
        "range": [
          824,
          830
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
                825,
                826
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              825,
              826
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
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
              "name": "P",
              "optional": false,
              "range": [
                828,
                829
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 36
                },
                "start": {
                  "column": 16,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              828,
              829
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 36
              },
              "start": {
                "column": 16,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        812,
        903
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          935,
          995
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "actionType",
              "optional": false,
              "range": [
                941,
                951
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
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
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 14,
                  "line": 41
                }
              },
              "range": [
                951,
                966
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    963,
                    966
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
                          964,
                          965
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 41
                          },
                          "start": {
                            "column": 27,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        964,
                        965
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 41
                        },
                        "start": {
                          "column": 27,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 41
                    },
                    "start": {
                      "column": 26,
                      "line": 41
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "range": [
                    953,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 41
                    },
                    "start": {
                      "column": 16,
                      "line": 41
                    }
                  }
                },
                "range": [
                  953,
                  966
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 41
                  },
                  "start": {
                    "column": 16,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              941,
              966
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "range": [
                971,
                978
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
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
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              },
              "range": [
                978,
                993
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    987,
                    993
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
                          988,
                          989
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 42
                          },
                          "start": {
                            "column": 21,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        988,
                        989
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 42
                        },
                        "start": {
                          "column": 21,
                          "line": 42
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          991,
                          992
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 42
                          },
                          "start": {
                            "column": 24,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        991,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 42
                        },
                        "start": {
                          "column": 24,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "range": [
                    980,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 42
                    },
                    "start": {
                      "column": 13,
                      "line": 42
                    }
                  }
                },
                "range": [
                  980,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 42
                  },
                  "start": {
                    "column": 13,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              971,
              993
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 30,
            "line": 40
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionHandler",
        "optional": false,
        "range": [
          915,
          928
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 40
          },
          "start": {
            "column": 10,
            "line": 40
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 40
          },
          "start": {
            "column": 23,
            "line": 40
          }
        },
        "range": [
          928,
          934
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
                929,
                930
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 40
                },
                "start": {
                  "column": 24,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              929,
              930
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 40
              },
              "start": {
                "column": 24,
                "line": 40
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
              "name": "P",
              "optional": false,
              "range": [
                932,
                933
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 40
                },
                "start": {
                  "column": 27,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              932,
              933
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 40
              },
              "start": {
                "column": 27,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        905,
        995
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 40
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
        "name": "handler",
        "optional": false,
        "range": [
          1014,
          1021
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 45
          },
          "start": {
            "column": 17,
            "line": 45
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "actionType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 45
              },
              "start": {
                "column": 41,
                "line": 45
              }
            },
            "range": [
              1038,
              1053
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1050,
                  1053
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
                        1051,
                        1052
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 45
                        },
                        "start": {
                          "column": 54,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1051,
                      1052
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 45
                      },
                      "start": {
                        "column": 54,
                        "line": 45
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 45
                  },
                  "start": {
                    "column": 53,
                    "line": 45
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionType",
                "optional": false,
                "range": [
                  1040,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 45
                  },
                  "start": {
                    "column": 43,
                    "line": 45
                  }
                }
              },
              "range": [
                1040,
                1053
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 45
                },
                "start": {
                  "column": 43,
                  "line": 45
                }
              }
            }
          },
          "range": [
            1028,
            1053
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 45
            },
            "start": {
              "column": 31,
              "line": 45
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 45
              },
              "start": {
                "column": 65,
                "line": 45
              }
            },
            "range": [
              1062,
              1077
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1071,
                  1077
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
                        1072,
                        1073
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 45
                        },
                        "start": {
                          "column": 75,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1072,
                      1073
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 45
                      },
                      "start": {
                        "column": 75,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1075,
                        1076
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 45
                        },
                        "start": {
                          "column": 78,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1075,
                      1076
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 45
                      },
                      "start": {
                        "column": 78,
                        "line": 45
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 45
                  },
                  "start": {
                    "column": 74,
                    "line": 45
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Handler",
                "optional": false,
                "range": [
                  1064,
                  1071
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 45
                  },
                  "start": {
                    "column": 67,
                    "line": 45
                  }
                }
              },
              "range": [
                1064,
                1077
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 45
                },
                "start": {
                  "column": 67,
                  "line": 45
                }
              }
            }
          },
          "range": [
            1055,
            1077
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 45
            },
            "start": {
              "column": 58,
              "line": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 102,
            "line": 45
          },
          "start": {
            "column": 81,
            "line": 45
          }
        },
        "range": [
          1078,
          1099
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1093,
              1099
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
                    1094,
                    1095
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 45
                    },
                    "start": {
                      "column": 97,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1094,
                  1095
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 45
                  },
                  "start": {
                    "column": 97,
                    "line": 45
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1097,
                    1098
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 45
                    },
                    "start": {
                      "column": 100,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1097,
                  1098
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 45
                  },
                  "start": {
                    "column": 100,
                    "line": 45
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 45
              },
              "start": {
                "column": 96,
                "line": 45
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActionHandler",
            "optional": false,
            "range": [
              1080,
              1093
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 45
              },
              "start": {
                "column": 83,
                "line": 45
              }
            }
          },
          "range": [
            1080,
            1099
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 45
            },
            "start": {
              "column": 83,
              "line": 45
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 45
          },
          "start": {
            "column": 24,
            "line": 45
          }
        },
        "range": [
          1021,
          1027
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
                1022,
                1023
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 45
                },
                "start": {
                  "column": 25,
                  "line": 45
                }
              }
            },
            "out": false,
            "range": [
              1022,
              1023
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 45
              },
              "start": {
                "column": 25,
                "line": 45
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
              "name": "P",
              "optional": false,
              "range": [
                1025,
                1026
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 45
                },
                "start": {
                  "column": 28,
                  "line": 45
                }
              }
            },
            "out": false,
            "range": [
              1025,
              1026
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 45
              },
              "start": {
                "column": 28,
                "line": 45
              }
            }
          }
        ]
      },
      "range": [
        997,
        1099
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
        "name": "createReducer",
        "optional": false,
        "range": [
          1118,
          1131
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 47
          },
          "start": {
            "column": 17,
            "line": 47
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 48
              },
              "start": {
                "column": 20,
                "line": 48
              }
            },
            "range": [
              1156,
              1159
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  1158,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 48
                  },
                  "start": {
                    "column": 22,
                    "line": 48
                  }
                }
              },
              "range": [
                1158,
                1159
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 48
                },
                "start": {
                  "column": 22,
                  "line": 48
                }
              }
            }
          },
          "range": [
            1144,
            1159
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 48
            },
            "start": {
              "column": 8,
              "line": 48
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "actionHandlers",
            "optional": false,
            "range": [
              1172,
              1186
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 49
              },
              "start": {
                "column": 11,
                "line": 49
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 49
              },
              "start": {
                "column": 25,
                "line": 49
              }
            },
            "range": [
              1186,
              1211
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1201,
                    1209
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
                          1202,
                          1203
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 49
                          },
                          "start": {
                            "column": 41,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1202,
                        1203
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 49
                        },
                        "start": {
                          "column": 41,
                          "line": 49
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1205,
                        1208
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 49
                        },
                        "start": {
                          "column": 44,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 49
                    },
                    "start": {
                      "column": 40,
                      "line": 49
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionHandler",
                  "optional": false,
                  "range": [
                    1188,
                    1201
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 49
                    },
                    "start": {
                      "column": 27,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1188,
                  1209
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 49
                  },
                  "start": {
                    "column": 27,
                    "line": 49
                  }
                }
              },
              "range": [
                1188,
                1211
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 49
                },
                "start": {
                  "column": 27,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1169,
            1211
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 49
            },
            "start": {
              "column": 8,
              "line": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 10,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        },
        "range": [
          1217,
          1222
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1219,
            1222
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 50
            },
            "start": {
              "column": 7,
              "line": 50
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 47
          },
          "start": {
            "column": 30,
            "line": 47
          }
        },
        "range": [
          1131,
          1134
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
                1132,
                1133
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 47
                },
                "start": {
                  "column": 31,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1132,
              1133
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 47
              },
              "start": {
                "column": 31,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        1101,
        1222
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1243,
          1264
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "range": [
                1249,
                1254
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
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
                  "column": 17,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 53
                }
              },
              "range": [
                1254,
                1262
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1256,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1249,
              1262
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 19,
            "line": 52
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AppState",
        "optional": false,
        "range": [
          1234,
          1242
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 52
          },
          "start": {
            "column": 10,
            "line": 52
          }
        }
      },
      "range": [
        1224,
        1264
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 56
                },
                "start": {
                  "column": 18,
                  "line": 56
                }
              },
              "range": [
                1284,
                1294
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AppState",
                  "optional": false,
                  "range": [
                    1286,
                    1294
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 56
                    },
                    "start": {
                      "column": 20,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1286,
                  1294
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 56
                  },
                  "start": {
                    "column": 20,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1272,
              1294
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 56
              },
              "start": {
                "column": 6,
                "line": 56
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
                  "name": "dummy",
                  "optional": false,
                  "range": [
                    1303,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 57
                    },
                    "start": {
                      "column": 4,
                      "line": 57
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    1310,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 57
                    },
                    "start": {
                      "column": 11,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1303,
                  1312
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              }
            ],
            "range": [
              1297,
              1314
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 58
              },
              "start": {
                "column": 31,
                "line": 56
              }
            }
          },
          "range": [
            1272,
            1314
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1266,
        1314
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "NON_VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 60
                },
                "start": {
                  "column": 21,
                  "line": 60
                }
              },
              "range": [
                1337,
                1357
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1349,
                    1357
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1350,
                        1356
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 60
                        },
                        "start": {
                          "column": 34,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 60
                    },
                    "start": {
                      "column": 33,
                      "line": 60
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "range": [
                    1339,
                    1349
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 60
                    },
                    "start": {
                      "column": 23,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1339,
                  1357
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 60
                  },
                  "start": {
                    "column": 23,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1322,
              1357
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 60
              },
              "start": {
                "column": 6,
                "line": 60
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'NON_VOID_ACTION'",
            "value": "NON_VOID_ACTION",
            "range": [
              1360,
              1377
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 60
              },
              "start": {
                "column": 44,
                "line": 60
              }
            }
          },
          "range": [
            1322,
            1377
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 61
                },
                "start": {
                  "column": 17,
                  "line": 61
                }
              },
              "range": [
                1395,
                1413
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1407,
                    1413
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        1408,
                        1412
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 61
                        },
                        "start": {
                          "column": 30,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 61
                    },
                    "start": {
                      "column": 29,
                      "line": 61
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "range": [
                    1397,
                    1407
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 61
                    },
                    "start": {
                      "column": 19,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1397,
                  1413
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 61
                  },
                  "start": {
                    "column": 19,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1384,
              1413
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 61
              },
              "start": {
                "column": 6,
                "line": 61
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'VOID_ACTION'",
            "value": "VOID_ACTION",
            "range": [
              1416,
              1429
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 61
              },
              "start": {
                "column": 38,
                "line": 61
              }
            }
          },
          "range": [
            1384,
            1429
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 61
            },
            "start": {
              "column": 6,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1316,
        1429
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "defaultState",
            "optional": false,
            "range": [
              1450,
              1462
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NON_VOID_ACTION",
                "optional": false,
                "range": [
                  1476,
                  1491
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 65
                  },
                  "start": {
                    "column": 12,
                    "line": 65
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "range": [
                    1514,
                    1519
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 65
                    },
                    "start": {
                      "column": 50,
                      "line": 65
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
                    "name": "state",
                    "optional": false,
                    "range": [
                      1494,
                      1499
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 65
                      },
                      "start": {
                        "column": 30,
                        "line": 65
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_payload",
                    "optional": false,
                    "range": [
                      1501,
                      1509
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 65
                      },
                      "start": {
                        "column": 37,
                        "line": 65
                      }
                    }
                  }
                ],
                "range": [
                  1493,
                  1519
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 65
                  },
                  "start": {
                    "column": 29,
                    "line": 65
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "range": [
                1468,
                1475
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "optional": false,
            "range": [
              1468,
              1520
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "VOID_ACTION",
                "optional": false,
                "range": [
                  1534,
                  1545
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 66
                  },
                  "start": {
                    "column": 12,
                    "line": 66
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "range": [
                    1556,
                    1561
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 66
                    },
                    "start": {
                      "column": 34,
                      "line": 66
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
                    "name": "state",
                    "optional": false,
                    "range": [
                      1547,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 66
                      },
                      "start": {
                        "column": 25,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  1547,
                  1561
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 66
                  },
                  "start": {
                    "column": 25,
                    "line": 66
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "range": [
                1526,
                1533
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "optional": false,
            "range": [
              1526,
              1562
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createReducer",
          "optional": false,
          "range": [
            1431,
            1444
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "optional": false,
        "range": [
          1431,
          1564
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        1431,
        1564
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "range": [
          1582,
          1583
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 71
          },
          "start": {
            "column": 5,
            "line": 71
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
                1590,
                1591
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 72
                },
                "start": {
                  "column": 2,
                  "line": 72
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
                  "column": 24,
                  "line": 72
                },
                "start": {
                  "column": 3,
                  "line": 72
                }
              },
              "range": [
                1591,
                1612
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 15,
                          "line": 72
                        },
                        "start": {
                          "column": 7,
                          "line": 72
                        }
                      },
                      "range": [
                        1595,
                        1603
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1597,
                          1603
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 72
                          },
                          "start": {
                            "column": 9,
                            "line": 72
                          }
                        }
                      }
                    },
                    "range": [
                      1594,
                      1603
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 72
                      },
                      "start": {
                        "column": 6,
                        "line": 72
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 72
                    },
                    "start": {
                      "column": 17,
                      "line": 72
                    }
                  },
                  "range": [
                    1605,
                    1612
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      1608,
                      1612
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 72
                      },
                      "start": {
                        "column": 20,
                        "line": 72
                      }
                    }
                  }
                },
                "range": [
                  1593,
                  1612
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 72
                  },
                  "start": {
                    "column": 5,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1590,
              1613
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 72
              },
              "start": {
                "column": 2,
                "line": 72
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
                1616,
                1617
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 73
                },
                "start": {
                  "column": 2,
                  "line": 73
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
                  "column": 24,
                  "line": 73
                },
                "start": {
                  "column": 3,
                  "line": 73
                }
              },
              "range": [
                1617,
                1638
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 15,
                          "line": 73
                        },
                        "start": {
                          "column": 7,
                          "line": 73
                        }
                      },
                      "range": [
                        1621,
                        1629
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1623,
                          1629
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 73
                          },
                          "start": {
                            "column": 9,
                            "line": 73
                          }
                        }
                      }
                    },
                    "range": [
                      1620,
                      1629
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 73
                      },
                      "start": {
                        "column": 6,
                        "line": 73
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 73
                    },
                    "start": {
                      "column": 17,
                      "line": 73
                    }
                  },
                  "range": [
                    1631,
                    1638
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      1634,
                      1638
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 73
                      },
                      "start": {
                        "column": 20,
                        "line": 73
                      }
                    }
                  }
                },
                "range": [
                  1619,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 73
                  },
                  "start": {
                    "column": 5,
                    "line": 73
                  }
                }
              }
            },
            "range": [
              1616,
              1639
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 73
              },
              "start": {
                "column": 2,
                "line": 73
              }
            }
          }
        ],
        "range": [
          1586,
          1641
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 9,
            "line": 71
          }
        }
      },
      "range": [
        1577,
        1642
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "range": [
          1649,
          1650
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "range": [
                1657,
                1659
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 77
                },
                "start": {
                  "column": 2,
                  "line": 77
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 28,
                      "line": 77
                    },
                    "start": {
                      "column": 25,
                      "line": 77
                    }
                  },
                  "range": [
                    1680,
                    1683
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1682,
                        1683
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 77
                        },
                        "start": {
                          "column": 27,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1682,
                      1683
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 77
                      },
                      "start": {
                        "column": 27,
                        "line": 77
                      }
                    }
                  }
                },
                "range": [
                  1679,
                  1683
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 77
                  },
                  "start": {
                    "column": 24,
                    "line": 77
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 77
                    },
                    "start": {
                      "column": 38,
                      "line": 77
                    }
                  },
                  "range": [
                    1693,
                    1699
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
                          1697,
                          1698
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 77
                          },
                          "start": {
                            "column": 42,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1697,
                        1698
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 77
                        },
                        "start": {
                          "column": 42,
                          "line": 77
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "range": [
                          1695,
                          1696
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 77
                          },
                          "start": {
                            "column": 40,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1695,
                        1696
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 77
                        },
                        "start": {
                          "column": 40,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1695,
                      1699
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 77
                      },
                      "start": {
                        "column": 40,
                        "line": 77
                      }
                    }
                  }
                },
                "range": [
                  1685,
                  1699
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 77
                  },
                  "start": {
                    "column": 30,
                    "line": 77
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 77
                },
                "start": {
                  "column": 45,
                  "line": 77
                }
              },
              "range": [
                1700,
                1706
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1702,
                  1706
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 77
                  },
                  "start": {
                    "column": 47,
                    "line": 77
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              },
              "range": [
                1659,
                1678
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
                        "name": "R",
                        "optional": false,
                        "range": [
                          1676,
                          1677
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 77
                          },
                          "start": {
                            "column": 21,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1676,
                        1677
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 77
                        },
                        "start": {
                          "column": 21,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1670,
                      1677
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 77
                      },
                      "start": {
                        "column": 15,
                        "line": 77
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
                      1660,
                      1661
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 77
                      },
                      "start": {
                        "column": 5,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1660,
                    1677
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 77
                    },
                    "start": {
                      "column": 5,
                      "line": 77
                    }
                  }
                }
              ]
            },
            "range": [
              1657,
              1707
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 77
              },
              "start": {
                "column": 2,
                "line": 77
              }
            }
          }
        ],
        "range": [
          1653,
          1709
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 76
          }
        }
      },
      "range": [
        1644,
        1710
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 76
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
                  "column": 16,
                  "line": 80
                },
                "start": {
                  "column": 13,
                  "line": 80
                }
              },
              "range": [
                1725,
                1728
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    1727,
                    1728
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 80
                    },
                    "start": {
                      "column": 15,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1727,
                  1728
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 80
                  },
                  "start": {
                    "column": 15,
                    "line": 80
                  }
                }
              }
            },
            "range": [
              1724,
              1728
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 80
              },
              "start": {
                "column": 12,
                "line": 80
              }
            }
          },
          "init": null,
          "range": [
            1724,
            1728
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 80
            },
            "start": {
              "column": 12,
              "line": 80
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1712,
        1729
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
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
              1735,
              1738
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 81
              },
              "start": {
                "column": 5,
                "line": 81
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                1745,
                1747
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 81
                },
                "start": {
                  "column": 15,
                  "line": 81
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
                "name": "a",
                "optional": false,
                "range": [
                  1740,
                  1741
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 81
                  },
                  "start": {
                    "column": 10,
                    "line": 81
                  }
                }
              }
            ],
            "range": [
              1740,
              1747
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 81
              },
              "start": {
                "column": 10,
                "line": 81
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
            "name": "x",
            "optional": false,
            "range": [
              1730,
              1731
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 81
              },
              "start": {
                "column": 0,
                "line": 81
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "range": [
              1732,
              1734
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 81
              },
              "start": {
                "column": 2,
                "line": 81
              }
            }
          },
          "range": [
            1730,
            1734
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 81
            },
            "start": {
              "column": 0,
              "line": 81
            }
          }
        },
        "optional": false,
        "range": [
          1730,
          1748
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 81
          },
          "start": {
            "column": 0,
            "line": 81
          }
        }
      },
      "range": [
        1730,
        1749
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1805,
                1834
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      1810,
                      1821
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 88
                      },
                      "start": {
                        "column": 2,
                        "line": 88
                      }
                    }
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      1821,
                      1832
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
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
                              "column": 22,
                              "line": 88
                            },
                            "start": {
                              "column": 19,
                              "line": 88
                            }
                          },
                          "range": [
                            1827,
                            1830
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "range": [
                                1829,
                                1830
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 88
                                },
                                "start": {
                                  "column": 21,
                                  "line": 88
                                }
                              }
                            },
                            "range": [
                              1829,
                              1830
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 88
                              },
                              "start": {
                                "column": 21,
                                "line": 88
                              }
                            }
                          }
                        },
                        "range": [
                          1822,
                          1830
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 88
                          },
                          "start": {
                            "column": 14,
                            "line": 88
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 88
                      },
                      "start": {
                        "column": 13,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1810,
                    1832
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 88
                    },
                    "start": {
                      "column": 2,
                      "line": 88
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 89
                },
                "start": {
                  "column": 27,
                  "line": 87
                }
              }
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "range": [
                1792,
                1801
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 87
                },
                "start": {
                  "column": 14,
                  "line": 87
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 87
                },
                "start": {
                  "column": 23,
                  "line": 87
                }
              },
              "range": [
                1801,
                1804
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      1802,
                      1803
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 87
                      },
                      "start": {
                        "column": 24,
                        "line": 87
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1802,
                    1803
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 87
                    },
                    "start": {
                      "column": 24,
                      "line": 87
                    }
                  }
                }
              ]
            },
            "range": [
              1778,
              1834
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 89
              },
              "start": {
                "column": 0,
                "line": 87
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1873,
                1908
              ],
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                            "column": 15,
                            "line": 92
                          },
                          "start": {
                            "column": 12,
                            "line": 92
                          }
                        },
                        "range": [
                          1887,
                          1890
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              1889,
                              1890
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 92
                              },
                              "start": {
                                "column": 14,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            1889,
                            1890
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 92
                            },
                            "start": {
                              "column": 14,
                              "line": 92
                            }
                          }
                        }
                      },
                      "range": [
                        1882,
                        1890
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 92
                        },
                        "start": {
                          "column": 7,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 92
                      },
                      "start": {
                        "column": 16,
                        "line": 92
                      }
                    },
                    "range": [
                      1891,
                      1905
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1902,
                          1905
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
                                1903,
                                1904
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 92
                                },
                                "start": {
                                  "column": 28,
                                  "line": 92
                                }
                              }
                            },
                            "range": [
                              1903,
                              1904
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 92
                              },
                              "start": {
                                "column": 28,
                                "line": 92
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 92
                          },
                          "start": {
                            "column": 27,
                            "line": 92
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "range": [
                          1893,
                          1902
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 92
                          },
                          "start": {
                            "column": 18,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        1893,
                        1905
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 92
                        },
                        "start": {
                          "column": 18,
                          "line": 92
                        }
                      }
                    }
                  },
                  "range": [
                    1877,
                    1906
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 92
                    },
                    "start": {
                      "column": 2,
                      "line": 92
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 93
                },
                "start": {
                  "column": 33,
                  "line": 91
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "range": [
                1850,
                1864
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 91
                },
                "start": {
                  "column": 10,
                  "line": 91
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 91
                },
                "start": {
                  "column": 24,
                  "line": 91
                }
              },
              "range": [
                1864,
                1872
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      1869,
                      1871
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 91
                      },
                      "start": {
                        "column": 29,
                        "line": 91
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
                      1865,
                      1866
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 91
                      },
                      "start": {
                        "column": 25,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1865,
                    1871
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 91
                    },
                    "start": {
                      "column": 25,
                      "line": 91
                    }
                  }
                }
              ]
            },
            "range": [
              1840,
              1908
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 93
              },
              "start": {
                "column": 0,
                "line": 91
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CreateElementChildren",
              "optional": false,
              "range": [
                1915,
                1936
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 95
                },
                "start": {
                  "column": 5,
                  "line": 95
                }
              }
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1944,
                    1945
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 96
                    },
                    "start": {
                      "column": 2,
                      "line": 96
                    }
                  }
                },
                "range": [
                  1944,
                  1945
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 96
                  },
                  "start": {
                    "column": 2,
                    "line": 96
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "range": [
                        1956,
                        1964
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 96
                        },
                        "start": {
                          "column": 14,
                          "line": 96
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
                          "column": 32,
                          "line": 96
                        },
                        "start": {
                          "column": 23,
                          "line": 96
                        }
                      },
                      "range": [
                        1965,
                        1974
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
                            "name": "C",
                            "optional": false,
                            "range": [
                              1973,
                              1974
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 96
                              },
                              "start": {
                                "column": 31,
                                "line": 96
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            1973,
                            1974
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 96
                            },
                            "start": {
                              "column": 31,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          1967,
                          1974
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 96
                          },
                          "start": {
                            "column": 25,
                            "line": 96
                          }
                        }
                      }
                    },
                    "range": [
                      1956,
                      1974
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 96
                      },
                      "start": {
                        "column": 14,
                        "line": 96
                      }
                    }
                  }
                ],
                "range": [
                  1954,
                  1976
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 96
                  },
                  "start": {
                    "column": 12,
                    "line": 96
                  }
                }
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "range": [
                  2019,
                  2026
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
                  }
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      1981,
                      1982
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 97
                      },
                      "start": {
                        "column": 4,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    1981,
                    1982
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 97
                    },
                    "start": {
                      "column": 4,
                      "line": 97
                    }
                  }
                },
                "extendsType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1991,
                      1994
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 97
                      },
                      "start": {
                        "column": 14,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    1991,
                    1996
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 97
                    },
                    "start": {
                      "column": 14,
                      "line": 97
                    }
                  }
                },
                "falseType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        2011,
                        2012
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 99
                        },
                        "start": {
                          "column": 6,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2011,
                      2012
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 99
                      },
                      "start": {
                        "column": 6,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2011,
                    2014
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 99
                    },
                    "start": {
                      "column": 6,
                      "line": 99
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      2003,
                      2004
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 98
                      },
                      "start": {
                        "column": 6,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    2003,
                    2004
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 98
                    },
                    "start": {
                      "column": 6,
                      "line": 98
                    }
                  }
                },
                "range": [
                  1981,
                  2014
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 99
                  },
                  "start": {
                    "column": 4,
                    "line": 97
                  }
                }
              },
              "range": [
                1944,
                2026
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 100
                },
                "start": {
                  "column": 2,
                  "line": 96
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 95
                },
                "start": {
                  "column": 26,
                  "line": 95
                }
              },
              "range": [
                1936,
                1939
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      1937,
                      1938
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 95
                      },
                      "start": {
                        "column": 27,
                        "line": 95
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1937,
                    1938
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 95
                    },
                    "start": {
                      "column": 27,
                      "line": 95
                    }
                  }
                }
              ]
            },
            "range": [
              1910,
              2027
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 100
              },
              "start": {
                "column": 0,
                "line": 95
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
              "name": "createElement",
              "optional": false,
              "range": [
                2046,
                2059
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 102
                },
                "start": {
                  "column": 17,
                  "line": 102
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
                      "column": 25,
                      "line": 103
                    },
                    "start": {
                      "column": 6,
                      "line": 103
                    }
                  },
                  "range": [
                    2081,
                    2100
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2097,
                        2100
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
                              2098,
                              2099
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 103
                              },
                              "start": {
                                "column": 23,
                                "line": 103
                              }
                            }
                          },
                          "range": [
                            2098,
                            2099
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 103
                            },
                            "start": {
                              "column": 23,
                              "line": 103
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 103
                        },
                        "start": {
                          "column": 22,
                          "line": 103
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "range": [
                        2083,
                        2097
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 103
                        },
                        "start": {
                          "column": 8,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      2083,
                      2100
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  }
                },
                "range": [
                  2077,
                  2100
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 103
                  },
                  "start": {
                    "column": 2,
                    "line": 103
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "range": [
                    2107,
                    2115
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 104
                    },
                    "start": {
                      "column": 5,
                      "line": 104
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 104
                    },
                    "start": {
                      "column": 13,
                      "line": 104
                    }
                  },
                  "range": [
                    2115,
                    2141
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2138,
                        2141
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
                              2139,
                              2140
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 104
                              },
                              "start": {
                                "column": 37,
                                "line": 104
                              }
                            }
                          },
                          "range": [
                            2139,
                            2140
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 104
                            },
                            "start": {
                              "column": 37,
                              "line": 104
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 104
                        },
                        "start": {
                          "column": 36,
                          "line": 104
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "range": [
                        2117,
                        2138
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 104
                        },
                        "start": {
                          "column": 15,
                          "line": 104
                        }
                      }
                    },
                    "range": [
                      2117,
                      2141
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 104
                      },
                      "start": {
                        "column": 15,
                        "line": 104
                      }
                    }
                  }
                },
                "range": [
                  2104,
                  2141
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 104
                  },
                  "start": {
                    "column": 2,
                    "line": 104
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 6,
                  "line": 105
                },
                "start": {
                  "column": 1,
                  "line": 105
                }
              },
              "range": [
                2143,
                2148
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2145,
                  2148
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 105
                  },
                  "start": {
                    "column": 3,
                    "line": 105
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 102
                },
                "start": {
                  "column": 30,
                  "line": 102
                }
              },
              "range": [
                2059,
                2073
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      2070,
                      2072
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 102
                      },
                      "start": {
                        "column": 41,
                        "line": 102
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
                      2060,
                      2061
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 102
                      },
                      "start": {
                        "column": 31,
                        "line": 102
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2060,
                    2072
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 102
                    },
                    "start": {
                      "column": 31,
                      "line": 102
                    }
                  }
                }
              ]
            },
            "range": [
              2029,
              2149
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 105
              },
              "start": {
                "column": 0,
                "line": 102
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
              "name": "createElement2",
              "optional": false,
              "range": [
                2168,
                2182
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 107
                },
                "start": {
                  "column": 17,
                  "line": 107
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
                      "column": 25,
                      "line": 108
                    },
                    "start": {
                      "column": 6,
                      "line": 108
                    }
                  },
                  "range": [
                    2204,
                    2223
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2220,
                        2223
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
                              2221,
                              2222
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 108
                              },
                              "start": {
                                "column": 23,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            2221,
                            2222
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 108
                            },
                            "start": {
                              "column": 23,
                              "line": 108
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 108
                        },
                        "start": {
                          "column": 22,
                          "line": 108
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "range": [
                        2206,
                        2220
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 108
                        },
                        "start": {
                          "column": 8,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      2206,
                      2223
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 108
                      },
                      "start": {
                        "column": 8,
                        "line": 108
                      }
                    }
                  }
                },
                "range": [
                  2200,
                  2223
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 108
                  },
                  "start": {
                    "column": 2,
                    "line": 108
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 109
                    },
                    "start": {
                      "column": 7,
                      "line": 109
                    }
                  },
                  "range": [
                    2232,
                    2258
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2255,
                        2258
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
                              2256,
                              2257
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 109
                              },
                              "start": {
                                "column": 31,
                                "line": 109
                              }
                            }
                          },
                          "range": [
                            2256,
                            2257
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 109
                            },
                            "start": {
                              "column": 31,
                              "line": 109
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 109
                        },
                        "start": {
                          "column": 30,
                          "line": 109
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "range": [
                        2234,
                        2255
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 109
                        },
                        "start": {
                          "column": 9,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      2234,
                      2258
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 109
                      },
                      "start": {
                        "column": 9,
                        "line": 109
                      }
                    }
                  }
                },
                "range": [
                  2227,
                  2258
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 109
                  },
                  "start": {
                    "column": 2,
                    "line": 109
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 6,
                  "line": 110
                },
                "start": {
                  "column": 1,
                  "line": 110
                }
              },
              "range": [
                2260,
                2265
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2262,
                  2265
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 110
                  },
                  "start": {
                    "column": 3,
                    "line": 110
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 107
                },
                "start": {
                  "column": 31,
                  "line": 107
                }
              },
              "range": [
                2182,
                2196
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      2193,
                      2195
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 107
                      },
                      "start": {
                        "column": 42,
                        "line": 107
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
                      2183,
                      2184
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 107
                      },
                      "start": {
                        "column": 32,
                        "line": 107
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2183,
                    2195
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 107
                    },
                    "start": {
                      "column": 32,
                      "line": 107
                    }
                  }
                }
              ]
            },
            "range": [
              2151,
              2266
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 110
              },
              "start": {
                "column": 0,
                "line": 107
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2348,
                2350
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 112
                },
                "start": {
                  "column": 80,
                  "line": 112
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferFunctionTypes",
              "optional": false,
              "range": [
                2274,
                2292
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 112
                },
                "start": {
                  "column": 6,
                  "line": 112
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "range": [
                2301,
                2310
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 112
                },
                "start": {
                  "column": 33,
                  "line": 112
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2310,
                2347
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "range": [
                          2312,
                          2320
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 112
                          },
                          "start": {
                            "column": 44,
                            "line": 112
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
                            "column": 77,
                            "line": 112
                          },
                          "start": {
                            "column": 52,
                            "line": 112
                          }
                        },
                        "range": [
                          2320,
                          2345
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 112
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 112
                                  }
                                },
                                "range": [
                                  2326,
                                  2334
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    2328,
                                    2334
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 112
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 112
                                    }
                                  }
                                }
                              },
                              "range": [
                                2323,
                                2334
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 112
                                },
                                "start": {
                                  "column": 55,
                                  "line": 112
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 112
                              },
                              "start": {
                                "column": 68,
                                "line": 112
                              }
                            },
                            "range": [
                              2336,
                              2345
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2339,
                                2345
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 112
                                },
                                "start": {
                                  "column": 71,
                                  "line": 112
                                }
                              }
                            }
                          },
                          "range": [
                            2322,
                            2345
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 112
                            },
                            "start": {
                              "column": 54,
                              "line": 112
                            }
                          }
                        }
                      },
                      "range": [
                        2312,
                        2345
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 112
                        },
                        "start": {
                          "column": 44,
                          "line": 112
                        }
                      }
                    }
                  ],
                  "range": [
                    2311,
                    2346
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 112
                    },
                    "start": {
                      "column": 43,
                      "line": 112
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 112
                },
                "start": {
                  "column": 42,
                  "line": 112
                }
              }
            },
            "range": [
              2268,
              2350
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 112
              },
              "start": {
                "column": 0,
                "line": 112
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
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "range": [
                    2366,
                    2384
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 114
                    },
                    "start": {
                      "column": 14,
                      "line": 114
                    }
                  }
                },
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        2395,
                        2397
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 114
                        },
                        "start": {
                          "column": 43,
                          "line": 114
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2400,
                        2403
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 114
                        },
                        "start": {
                          "column": 48,
                          "line": 114
                        }
                      }
                    },
                    "range": [
                      2395,
                      2403
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 114
                      },
                      "start": {
                        "column": 43,
                        "line": 114
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2387,
                        2390
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 114
                        },
                        "start": {
                          "column": 35,
                          "line": 114
                        }
                      }
                    }
                  ],
                  "range": [
                    2386,
                    2403
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 114
                    },
                    "start": {
                      "column": 34,
                      "line": 114
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "range": [
                  2352,
                  2365
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 114
                  },
                  "start": {
                    "column": 0,
                    "line": 114
                  }
                }
              },
              "optional": false,
              "range": [
                2352,
                2404
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 114
                },
                "start": {
                  "column": 0,
                  "line": 114
                }
              }
            },
            "range": [
              2352,
              2405
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 114
              },
              "start": {
                "column": 0,
                "line": 114
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
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "range": [
                    2422,
                    2440
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 116
                    },
                    "start": {
                      "column": 15,
                      "line": 116
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            2452,
                            2454
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 116
                            },
                            "start": {
                              "column": 45,
                              "line": 116
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            2457,
                            2460
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 116
                            },
                            "start": {
                              "column": 50,
                              "line": 116
                            }
                          }
                        },
                        "range": [
                          2452,
                          2460
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 116
                          },
                          "start": {
                            "column": 45,
                            "line": 116
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            2444,
                            2447
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 116
                            },
                            "start": {
                              "column": 37,
                              "line": 116
                            }
                          }
                        }
                      ],
                      "range": [
                        2443,
                        2460
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 116
                        },
                        "start": {
                          "column": 36,
                          "line": 116
                        }
                      }
                    }
                  ],
                  "range": [
                    2442,
                    2461
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 116
                    },
                    "start": {
                      "column": 35,
                      "line": 116
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement2",
                "optional": false,
                "range": [
                  2407,
                  2421
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 116
                  },
                  "start": {
                    "column": 0,
                    "line": 116
                  }
                }
              },
              "optional": false,
              "range": [
                2407,
                2462
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 116
                },
                "start": {
                  "column": 0,
                  "line": 116
                }
              }
            },
            "range": [
              2407,
              2463
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 116
              },
              "start": {
                "column": 0,
                "line": 116
              }
            }
          }
        ],
        "range": [
          1775,
          2466
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 118
          },
          "start": {
            "column": 13,
            "line": 85
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1772,
          1774
        ],
        "decorators": [],
        "name": "N1",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 85
          },
          "start": {
            "column": 10,
            "line": 85
          }
        }
      },
      "kind": "namespace",
      "range": [
        1762,
        2466
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerBox",
        "optional": false,
        "range": [
          2484,
          2492
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 122
          },
          "start": {
            "column": 5,
            "line": 122
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
              "name": "value",
              "optional": false,
              "range": [
                2502,
                2507
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 123
                },
                "start": {
                  "column": 2,
                  "line": 123
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
                  "line": 123
                },
                "start": {
                  "column": 7,
                  "line": 123
                }
              },
              "range": [
                2507,
                2510
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2509,
                    2510
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 123
                    },
                    "start": {
                      "column": 9,
                      "line": 123
                    }
                  }
                },
                "range": [
                  2509,
                  2510
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 123
                  },
                  "start": {
                    "column": 9,
                    "line": 123
                  }
                }
              }
            },
            "range": [
              2502,
              2511
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 123
              },
              "start": {
                "column": 2,
                "line": 123
              }
            }
          }
        ],
        "range": [
          2498,
          2513
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 124
          },
          "start": {
            "column": 19,
            "line": 122
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 122
          },
          "start": {
            "column": 13,
            "line": 122
          }
        },
        "range": [
          2492,
          2495
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
                2493,
                2494
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 122
                },
                "start": {
                  "column": 14,
                  "line": 122
                }
              }
            },
            "out": false,
            "range": [
              2493,
              2494
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 122
              },
              "start": {
                "column": 14,
                "line": 122
              }
            }
          }
        ]
      },
      "range": [
        2479,
        2513
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OuterBox",
        "optional": false,
        "range": [
          2520,
          2528
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 126
          },
          "start": {
            "column": 5,
            "line": 126
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
              "name": "inner",
              "optional": false,
              "range": [
                2538,
                2543
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 127
                },
                "start": {
                  "column": 2,
                  "line": 127
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
                  "line": 127
                },
                "start": {
                  "column": 7,
                  "line": 127
                }
              },
              "range": [
                2543,
                2556
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2553,
                    2556
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
                          2554,
                          2555
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 127
                          },
                          "start": {
                            "column": 18,
                            "line": 127
                          }
                        }
                      },
                      "range": [
                        2554,
                        2555
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 127
                        },
                        "start": {
                          "column": 18,
                          "line": 127
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 127
                    },
                    "start": {
                      "column": 17,
                      "line": 127
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InnerBox",
                  "optional": false,
                  "range": [
                    2545,
                    2553
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 127
                    },
                    "start": {
                      "column": 9,
                      "line": 127
                    }
                  }
                },
                "range": [
                  2545,
                  2556
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 127
                  },
                  "start": {
                    "column": 9,
                    "line": 127
                  }
                }
              }
            },
            "range": [
              2538,
              2556
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 127
              },
              "start": {
                "column": 2,
                "line": 127
              }
            }
          }
        ],
        "range": [
          2534,
          2558
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 19,
            "line": 126
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 126
          },
          "start": {
            "column": 13,
            "line": 126
          }
        },
        "range": [
          2528,
          2531
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
                2529,
                2530
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 126
                },
                "start": {
                  "column": 14,
                  "line": 126
                }
              }
            },
            "out": false,
            "range": [
              2529,
              2530
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 126
              },
              "start": {
                "column": 14,
                "line": 126
              }
            }
          }
        ]
      },
      "range": [
        2515,
        2559
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 126
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxConsumerFromOuterBox",
        "optional": false,
        "range": [
          2566,
          2589
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 130
          },
          "start": {
            "column": 5,
            "line": 130
          }
        }
      },
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
              2597,
              2598
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 131
              },
              "start": {
                "column": 2,
                "line": 131
              }
            }
          },
          "range": [
            2597,
            2598
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 131
            },
            "start": {
              "column": 2,
              "line": 131
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2615,
              2624
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
                    "name": "U",
                    "optional": false,
                    "range": [
                      2622,
                      2623
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 131
                      },
                      "start": {
                        "column": 27,
                        "line": 131
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2622,
                    2623
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 131
                    },
                    "start": {
                      "column": 27,
                      "line": 131
                    }
                  }
                },
                "range": [
                  2616,
                  2623
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 131
                  },
                  "start": {
                    "column": 21,
                    "line": 131
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 131
              },
              "start": {
                "column": 20,
                "line": 131
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OuterBox",
            "optional": false,
            "range": [
              2607,
              2615
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 131
              },
              "start": {
                "column": 12,
                "line": 131
              }
            }
          },
          "range": [
            2607,
            2624
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 131
            },
            "start": {
              "column": 12,
              "line": 131
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2668,
            2673
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 133
            },
            "start": {
              "column": 6,
              "line": 133
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 132
                  },
                  "start": {
                    "column": 10,
                    "line": 132
                  }
                },
                "range": [
                  2637,
                  2650
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2647,
                      2650
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            2648,
                            2649
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 132
                            },
                            "start": {
                              "column": 21,
                              "line": 132
                            }
                          }
                        },
                        "range": [
                          2648,
                          2649
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 132
                          },
                          "start": {
                            "column": 21,
                            "line": 132
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 132
                      },
                      "start": {
                        "column": 20,
                        "line": 132
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InnerBox",
                    "optional": false,
                    "range": [
                      2639,
                      2647
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 132
                      },
                      "start": {
                        "column": 12,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    2639,
                    2650
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 132
                    },
                    "start": {
                      "column": 12,
                      "line": 132
                    }
                  }
                }
              },
              "range": [
                2634,
                2650
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 132
                },
                "start": {
                  "column": 7,
                  "line": 132
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 132
              },
              "start": {
                "column": 25,
                "line": 132
              }
            },
            "range": [
              2652,
              2659
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                2655,
                2659
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 132
                },
                "start": {
                  "column": 28,
                  "line": 132
                }
              }
            }
          },
          "range": [
            2633,
            2659
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 132
            },
            "start": {
              "column": 6,
              "line": 132
            }
          }
        },
        "range": [
          2597,
          2673
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 133
          },
          "start": {
            "column": 2,
            "line": 131
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 130
          },
          "start": {
            "column": 28,
            "line": 130
          }
        },
        "range": [
          2589,
          2592
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
                2590,
                2591
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 130
                },
                "start": {
                  "column": 29,
                  "line": 130
                }
              }
            },
            "out": false,
            "range": [
              2590,
              2591
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 130
              },
              "start": {
                "column": 29,
                "line": 130
              }
            }
          }
        ]
      },
      "range": [
        2561,
        2674
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 130
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
        "name": "passContentsToFunc",
        "optional": false,
        "range": [
          2693,
          2711
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 135
          },
          "start": {
            "column": 17,
            "line": 135
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outerBox",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 135
              },
              "start": {
                "column": 47,
                "line": 135
              }
            },
            "range": [
              2723,
              2726
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2725,
                  2726
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 135
                  },
                  "start": {
                    "column": 49,
                    "line": 135
                  }
                }
              },
              "range": [
                2725,
                2726
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 135
                },
                "start": {
                  "column": 49,
                  "line": 135
                }
              }
            }
          },
          "range": [
            2715,
            2726
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 135
            },
            "start": {
              "column": 39,
              "line": 135
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "consumer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 88,
                "line": 135
              },
              "start": {
                "column": 60,
                "line": 135
              }
            },
            "range": [
              2736,
              2764
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2761,
                  2764
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
                        2762,
                        2763
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 135
                        },
                        "start": {
                          "column": 86,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      2762,
                      2763
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 135
                      },
                      "start": {
                        "column": 86,
                        "line": 135
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 135
                  },
                  "start": {
                    "column": 85,
                    "line": 135
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxConsumerFromOuterBox",
                "optional": false,
                "range": [
                  2738,
                  2761
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 135
                  },
                  "start": {
                    "column": 62,
                    "line": 135
                  }
                }
              },
              "range": [
                2738,
                2764
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 135
                },
                "start": {
                  "column": 62,
                  "line": 135
                }
              }
            }
          },
          "range": [
            2728,
            2764
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 135
            },
            "start": {
              "column": 52,
              "line": 135
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 95,
            "line": 135
          },
          "start": {
            "column": 89,
            "line": 135
          }
        },
        "range": [
          2765,
          2771
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            2767,
            2771
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 135
            },
            "start": {
              "column": 91,
              "line": 135
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 135
          },
          "start": {
            "column": 35,
            "line": 135
          }
        },
        "range": [
          2711,
          2714
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
                2712,
                2713
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 135
                },
                "start": {
                  "column": 36,
                  "line": 135
                }
              }
            },
            "out": false,
            "range": [
              2712,
              2713
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 135
              },
              "start": {
                "column": 36,
                "line": 135
              }
            }
          }
        ]
      },
      "range": [
        2676,
        2772
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 135
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
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 137
                },
                "start": {
                  "column": 30,
                  "line": 137
                }
              },
              "range": [
                2804,
                2822
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2814,
                    2822
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        2815,
                        2821
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 137
                        },
                        "start": {
                          "column": 41,
                          "line": 137
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 137
                    },
                    "start": {
                      "column": 40,
                      "line": 137
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OuterBox",
                  "optional": false,
                  "range": [
                    2806,
                    2814
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 137
                    },
                    "start": {
                      "column": 32,
                      "line": 137
                    }
                  }
                },
                "range": [
                  2806,
                  2822
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 137
                  },
                  "start": {
                    "column": 32,
                    "line": 137
                  }
                }
              }
            },
            "range": [
              2788,
              2822
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 137
              },
              "start": {
                "column": 14,
                "line": 137
              }
            }
          },
          "init": null,
          "range": [
            2788,
            2822
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 137
            },
            "start": {
              "column": 14,
              "line": 137
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2774,
        2823
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 137
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
            "name": "outerBoxOfString",
            "optional": false,
            "range": [
              2844,
              2860
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 139
              },
              "start": {
                "column": 19,
                "line": 139
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "range": [
                  2869,
                  2872
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 139
                  },
                  "start": {
                    "column": 44,
                    "line": 139
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  2873,
                  2878
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 139
                  },
                  "start": {
                    "column": 48,
                    "line": 139
                  }
                }
              },
              "range": [
                2869,
                2878
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 139
                },
                "start": {
                  "column": 44,
                  "line": 139
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
                "name": "box",
                "optional": false,
                "range": [
                  2862,
                  2865
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 139
                  },
                  "start": {
                    "column": 37,
                    "line": 139
                  }
                }
              }
            ],
            "range": [
              2862,
              2878
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 139
              },
              "start": {
                "column": 37,
                "line": 139
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "passContentsToFunc",
          "optional": false,
          "range": [
            2825,
            2843
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 139
            },
            "start": {
              "column": 0,
              "line": 139
            }
          }
        },
        "optional": false,
        "range": [
          2825,
          2879
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 139
          },
          "start": {
            "column": 0,
            "line": 139
          }
        }
      },
      "range": [
        2825,
        2880
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 139
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DooDad",
        "optional": false,
        "range": [
          2909,
          2915
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 143
          },
          "start": {
            "column": 5,
            "line": 143
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'SOMETHING'",
              "value": "SOMETHING",
              "range": [
                2918,
                2929
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 143
                },
                "start": {
                  "column": 14,
                  "line": 143
                }
              }
            },
            "range": [
              2918,
              2929
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 143
              },
              "start": {
                "column": 14,
                "line": 143
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'ELSE'",
              "value": "ELSE",
              "range": [
                2932,
                2938
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 143
                },
                "start": {
                  "column": 28,
                  "line": 143
                }
              }
            },
            "range": [
              2932,
              2938
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 143
              },
              "start": {
                "column": 28,
                "line": 143
              }
            }
          }
        ],
        "range": [
          2918,
          2938
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 143
          },
          "start": {
            "column": 14,
            "line": 143
          }
        }
      },
      "range": [
        2904,
        2940
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 143
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2960,
          3416
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compiles",
              "optional": false,
              "range": [
                2970,
                2978
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 146
                },
                "start": {
                  "column": 8,
                  "line": 146
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "alternate": null,
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "raw": "'SOMETHING'",
                                        "value": "SOMETHING",
                                        "range": [
                                          3074,
                                          3085
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 149
                                          },
                                          "start": {
                                            "column": 11,
                                            "line": 149
                                          }
                                        }
                                      },
                                      "range": [
                                        3067,
                                        3086
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 149
                                        },
                                        "start": {
                                          "column": 4,
                                          "line": 149
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    3061,
                                    3091
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 4,
                                      "line": 150
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 148
                                    }
                                  }
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      3054,
                                      3055
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 8,
                                        "line": 148
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 148
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "2",
                                    "value": 2,
                                    "range": [
                                      3058,
                                      3059
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 148
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 148
                                      }
                                    }
                                  },
                                  "range": [
                                    3054,
                                    3059
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 148
                                    },
                                    "start": {
                                      "column": 7,
                                      "line": 148
                                    }
                                  }
                                },
                                "range": [
                                  3050,
                                  3091
                                ],
                                "loc": {
                                  "end": {
                                    "column": 4,
                                    "line": 150
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 148
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "'ELSE'",
                                  "value": "ELSE",
                                  "range": [
                                    3102,
                                    3108
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 151
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 151
                                    }
                                  }
                                },
                                "range": [
                                  3095,
                                  3109
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 151
                                  }
                                }
                              }
                            ],
                            "range": [
                              3045,
                              3113
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 152
                              },
                              "start": {
                                "column": 38,
                                "line": 147
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            3039,
                            3113
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 152
                            },
                            "start": {
                              "column": 32,
                              "line": 147
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                3016,
                                3023
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 147
                                },
                                "start": {
                                  "column": 9,
                                  "line": 147
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                3024,
                                3031
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 147
                                },
                                "start": {
                                  "column": 17,
                                  "line": 147
                                }
                              }
                            },
                            "range": [
                              3016,
                              3031
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 147
                              },
                              "start": {
                                "column": 9,
                                "line": 147
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3016,
                            3033
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 147
                            },
                            "start": {
                              "column": 9,
                              "line": 147
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "range": [
                            3034,
                            3038
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 147
                            },
                            "start": {
                              "column": 27,
                              "line": 147
                            }
                          }
                        },
                        "range": [
                          3016,
                          3038
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 147
                          },
                          "start": {
                            "column": 9,
                            "line": 147
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3016,
                        3114
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 152
                        },
                        "start": {
                          "column": 9,
                          "line": 147
                        }
                      }
                    },
                    "range": [
                      3009,
                      3115
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 152
                      },
                      "start": {
                        "column": 2,
                        "line": 147
                      }
                    }
                  }
                ],
                "range": [
                  3005,
                  3118
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 153
                  },
                  "start": {
                    "column": 43,
                    "line": 146
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 146
                  },
                  "start": {
                    "column": 22,
                    "line": 146
                  }
                },
                "range": [
                  2984,
                  3001
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2993,
                      3001
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "range": [
                            2994,
                            3000
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 146
                            },
                            "start": {
                              "column": 32,
                              "line": 146
                            }
                          }
                        },
                        "range": [
                          2994,
                          3000
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 146
                          },
                          "start": {
                            "column": 32,
                            "line": 146
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 146
                      },
                      "start": {
                        "column": 31,
                        "line": 146
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      2986,
                      2993
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 146
                      },
                      "start": {
                        "column": 24,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    2986,
                    3001
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 146
                    },
                    "start": {
                      "column": 24,
                      "line": 146
                    }
                  }
                }
              },
              "range": [
                2981,
                3118
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 153
                },
                "start": {
                  "column": 19,
                  "line": 146
                }
              }
            },
            "range": [
              2963,
              3119
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 153
              },
              "start": {
                "column": 1,
                "line": 146
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doesnt",
              "optional": false,
              "range": [
                3128,
                3134
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 154
                },
                "start": {
                  "column": 8,
                  "line": 154
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "'ELSE'",
                                  "value": "ELSE",
                                  "range": [
                                    3213,
                                    3219
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 156
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 156
                                    }
                                  }
                                },
                                "range": [
                                  3206,
                                  3220
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 156
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 156
                                  }
                                }
                              }
                            ],
                            "range": [
                              3201,
                              3224
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 157
                              },
                              "start": {
                                "column": 38,
                                "line": 155
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            3195,
                            3224
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 157
                            },
                            "start": {
                              "column": 32,
                              "line": 155
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                3172,
                                3179
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 155
                                },
                                "start": {
                                  "column": 9,
                                  "line": 155
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                3180,
                                3187
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 155
                                },
                                "start": {
                                  "column": 17,
                                  "line": 155
                                }
                              }
                            },
                            "range": [
                              3172,
                              3187
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 155
                              },
                              "start": {
                                "column": 9,
                                "line": 155
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3172,
                            3189
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 155
                            },
                            "start": {
                              "column": 9,
                              "line": 155
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "range": [
                            3190,
                            3194
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 155
                            },
                            "start": {
                              "column": 27,
                              "line": 155
                            }
                          }
                        },
                        "range": [
                          3172,
                          3194
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 155
                          },
                          "start": {
                            "column": 9,
                            "line": 155
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3172,
                        3225
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 157
                        },
                        "start": {
                          "column": 9,
                          "line": 155
                        }
                      }
                    },
                    "range": [
                      3165,
                      3226
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 157
                      },
                      "start": {
                        "column": 2,
                        "line": 155
                      }
                    }
                  }
                ],
                "range": [
                  3161,
                  3229
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 158
                  },
                  "start": {
                    "column": 41,
                    "line": 154
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 154
                  },
                  "start": {
                    "column": 20,
                    "line": 154
                  }
                },
                "range": [
                  3140,
                  3157
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3149,
                      3157
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "range": [
                            3150,
                            3156
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 154
                            },
                            "start": {
                              "column": 30,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          3150,
                          3156
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 154
                          },
                          "start": {
                            "column": 30,
                            "line": 154
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 154
                      },
                      "start": {
                        "column": 29,
                        "line": 154
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      3142,
                      3149
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 154
                      },
                      "start": {
                        "column": 22,
                        "line": 154
                      }
                    }
                  },
                  "range": [
                    3142,
                    3157
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 154
                    },
                    "start": {
                      "column": 22,
                      "line": 154
                    }
                  }
                }
              },
              "range": [
                3137,
                3229
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 158
                },
                "start": {
                  "column": 17,
                  "line": 154
                }
              }
            },
            "range": [
              3121,
              3230
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 158
              },
              "start": {
                "column": 1,
                "line": 154
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slightlyDifferentErrorMessage",
              "optional": false,
              "range": [
                3239,
                3268
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 159
                },
                "start": {
                  "column": 8,
                  "line": 159
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "alternate": null,
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "raw": "'SOMETHING'",
                                        "value": "SOMETHING",
                                        "range": [
                                          3364,
                                          3375
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 162
                                          },
                                          "start": {
                                            "column": 11,
                                            "line": 162
                                          }
                                        }
                                      },
                                      "range": [
                                        3357,
                                        3376
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 162
                                        },
                                        "start": {
                                          "column": 4,
                                          "line": 162
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    3351,
                                    3381
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 4,
                                      "line": 163
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 161
                                    }
                                  }
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      3344,
                                      3345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 8,
                                        "line": 161
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 161
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "2",
                                    "value": 2,
                                    "range": [
                                      3348,
                                      3349
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 161
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 161
                                      }
                                    }
                                  },
                                  "range": [
                                    3344,
                                    3349
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 161
                                    },
                                    "start": {
                                      "column": 7,
                                      "line": 161
                                    }
                                  }
                                },
                                "range": [
                                  3340,
                                  3381
                                ],
                                "loc": {
                                  "end": {
                                    "column": 4,
                                    "line": 163
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 161
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "'SOMETHING'",
                                  "value": "SOMETHING",
                                  "range": [
                                    3392,
                                    3403
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 164
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 164
                                    }
                                  }
                                },
                                "range": [
                                  3385,
                                  3404
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 164
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 164
                                  }
                                }
                              }
                            ],
                            "range": [
                              3335,
                              3408
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 165
                              },
                              "start": {
                                "column": 38,
                                "line": 160
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            3329,
                            3408
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 165
                            },
                            "start": {
                              "column": 32,
                              "line": 160
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                3306,
                                3313
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 160
                                },
                                "start": {
                                  "column": 9,
                                  "line": 160
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                3314,
                                3321
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 160
                                },
                                "start": {
                                  "column": 17,
                                  "line": 160
                                }
                              }
                            },
                            "range": [
                              3306,
                              3321
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 160
                              },
                              "start": {
                                "column": 9,
                                "line": 160
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3306,
                            3323
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 160
                            },
                            "start": {
                              "column": 9,
                              "line": 160
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "range": [
                            3324,
                            3328
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 160
                            },
                            "start": {
                              "column": 27,
                              "line": 160
                            }
                          }
                        },
                        "range": [
                          3306,
                          3328
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 160
                          },
                          "start": {
                            "column": 9,
                            "line": 160
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3306,
                        3409
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 165
                        },
                        "start": {
                          "column": 9,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      3299,
                      3410
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 165
                      },
                      "start": {
                        "column": 2,
                        "line": 160
                      }
                    }
                  }
                ],
                "range": [
                  3295,
                  3413
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 166
                  },
                  "start": {
                    "column": 64,
                    "line": 159
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 159
                  },
                  "start": {
                    "column": 43,
                    "line": 159
                  }
                },
                "range": [
                  3274,
                  3291
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3283,
                      3291
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "range": [
                            3284,
                            3290
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 159
                            },
                            "start": {
                              "column": 53,
                              "line": 159
                            }
                          }
                        },
                        "range": [
                          3284,
                          3290
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 159
                          },
                          "start": {
                            "column": 53,
                            "line": 159
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 159
                      },
                      "start": {
                        "column": 52,
                        "line": 159
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      3276,
                      3283
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 159
                      },
                      "start": {
                        "column": 45,
                        "line": 159
                      }
                    }
                  },
                  "range": [
                    3276,
                    3291
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 159
                    },
                    "start": {
                      "column": 45,
                      "line": 159
                    }
                  }
                }
              },
              "range": [
                3271,
                3413
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 166
                },
                "start": {
                  "column": 40,
                  "line": 159
                }
              }
            },
            "range": [
              3232,
              3414
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 166
              },
              "start": {
                "column": 1,
                "line": 159
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 167
          },
          "start": {
            "column": 18,
            "line": 145
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interesting",
        "optional": false,
        "range": [
          2948,
          2959
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 145
          },
          "start": {
            "column": 6,
            "line": 145
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2942,
        3416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 145
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
        "name": "invoke",
        "optional": false,
        "range": [
          3457,
          3463
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 171
          },
          "start": {
            "column": 17,
            "line": 171
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 171
              },
              "start": {
                "column": 28,
                "line": 171
              }
            },
            "range": [
              3468,
              3477
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 171
                  },
                  "start": {
                    "column": 33,
                    "line": 171
                  }
                },
                "range": [
                  3473,
                  3477
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      3476,
                      3477
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 171
                      },
                      "start": {
                        "column": 36,
                        "line": 171
                      }
                    }
                  },
                  "range": [
                    3476,
                    3477
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 171
                    },
                    "start": {
                      "column": 36,
                      "line": 171
                    }
                  }
                }
              },
              "range": [
                3470,
                3477
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 171
                },
                "start": {
                  "column": 30,
                  "line": 171
                }
              }
            }
          },
          "range": [
            3467,
            3477
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 171
            },
            "start": {
              "column": 27,
              "line": 171
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 171
          },
          "start": {
            "column": 38,
            "line": 171
          }
        },
        "range": [
          3478,
          3481
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3480,
              3481
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 171
              },
              "start": {
                "column": 40,
                "line": 171
              }
            }
          },
          "range": [
            3480,
            3481
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 171
            },
            "start": {
              "column": 40,
              "line": 171
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 171
          },
          "start": {
            "column": 23,
            "line": 171
          }
        },
        "range": [
          3463,
          3466
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
                3464,
                3465
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 171
                },
                "start": {
                  "column": 24,
                  "line": 171
                }
              }
            },
            "out": false,
            "range": [
              3464,
              3465
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 171
              },
              "start": {
                "column": 24,
                "line": 171
              }
            }
          }
        ]
      },
      "range": [
        3440,
        3482
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 171
        },
        "start": {
          "column": 0,
          "line": 171
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 173
                },
                "start": {
                  "column": 6,
                  "line": 173
                }
              },
              "range": [
                3490,
                3501
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        3492,
                        3493
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 173
                        },
                        "start": {
                          "column": 8,
                          "line": 173
                        }
                      }
                    },
                    "range": [
                      3492,
                      3493
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 173
                      },
                      "start": {
                        "column": 8,
                        "line": 173
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3496,
                        3497
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 173
                        },
                        "start": {
                          "column": 12,
                          "line": 173
                        }
                      }
                    },
                    "range": [
                      3496,
                      3497
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 173
                      },
                      "start": {
                        "column": 12,
                        "line": 173
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        3500,
                        3501
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 173
                        },
                        "start": {
                          "column": 16,
                          "line": 173
                        }
                      }
                    },
                    "range": [
                      3500,
                      3501
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 173
                      },
                      "start": {
                        "column": 16,
                        "line": 173
                      }
                    }
                  }
                ],
                "range": [
                  3492,
                  3501
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 173
                  },
                  "start": {
                    "column": 8,
                    "line": 173
                  }
                }
              }
            },
            "range": [
              3488,
              3501
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 173
              },
              "start": {
                "column": 4,
                "line": 173
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
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    3517,
                    3518
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 173
                    },
                    "start": {
                      "column": 33,
                      "line": 173
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  3511,
                  3518
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 173
                  },
                  "start": {
                    "column": 27,
                    "line": 173
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "invoke",
              "optional": false,
              "range": [
                3504,
                3510
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 173
                },
                "start": {
                  "column": 20,
                  "line": 173
                }
              }
            },
            "optional": false,
            "range": [
              3504,
              3519
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 173
              },
              "start": {
                "column": 20,
                "line": 173
              }
            }
          },
          "range": [
            3488,
            3519
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 173
            },
            "start": {
              "column": 4,
              "line": 173
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3484,
        3520
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 173
        },
        "start": {
          "column": 0,
          "line": 173
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
        "name": "assignPartial",
        "optional": false,
        "range": [
          3561,
          3574
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 177
          },
          "start": {
            "column": 17,
            "line": 177
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 177
              },
              "start": {
                "column": 40,
                "line": 177
              }
            },
            "range": [
              3584,
              3587
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3586,
                  3587
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 177
                  },
                  "start": {
                    "column": 42,
                    "line": 177
                  }
                }
              },
              "range": [
                3586,
                3587
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 177
                },
                "start": {
                  "column": 42,
                  "line": 177
                }
              }
            }
          },
          "range": [
            3578,
            3587
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 177
            },
            "start": {
              "column": 34,
              "line": 177
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "partial",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 177
              },
              "start": {
                "column": 52,
                "line": 177
              }
            },
            "range": [
              3596,
              3608
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3605,
                  3608
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
                        3606,
                        3607
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 177
                        },
                        "start": {
                          "column": 62,
                          "line": 177
                        }
                      }
                    },
                    "range": [
                      3606,
                      3607
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 177
                      },
                      "start": {
                        "column": 62,
                        "line": 177
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 177
                  },
                  "start": {
                    "column": 61,
                    "line": 177
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  3598,
                  3605
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 177
                  },
                  "start": {
                    "column": 54,
                    "line": 177
                  }
                }
              },
              "range": [
                3598,
                3608
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 177
                },
                "start": {
                  "column": 54,
                  "line": 177
                }
              }
            }
          },
          "range": [
            3589,
            3608
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 177
            },
            "start": {
              "column": 45,
              "line": 177
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 177
          },
          "start": {
            "column": 65,
            "line": 177
          }
        },
        "range": [
          3609,
          3612
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3611,
              3612
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 177
              },
              "start": {
                "column": 67,
                "line": 177
              }
            }
          },
          "range": [
            3611,
            3612
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 177
            },
            "start": {
              "column": 67,
              "line": 177
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 177
          },
          "start": {
            "column": 30,
            "line": 177
          }
        },
        "range": [
          3574,
          3577
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
                3575,
                3576
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 177
                },
                "start": {
                  "column": 31,
                  "line": 177
                }
              }
            },
            "out": false,
            "range": [
              3575,
              3576
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 177
              },
              "start": {
                "column": 31,
                "line": 177
              }
            }
          }
        ]
      },
      "range": [
        3544,
        3613
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 177
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
            "name": "obj",
            "optional": false,
            "range": [
              3619,
              3622
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 179
              },
              "start": {
                "column": 4,
                "line": 179
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    3629,
                    3632
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 180
                    },
                    "start": {
                      "column": 2,
                      "line": 180
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3632,
                    3648
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3646,
                      3648
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 180
                      },
                      "start": {
                        "column": 19,
                        "line": 180
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 180
                          },
                          "start": {
                            "column": 9,
                            "line": 180
                          }
                        },
                        "range": [
                          3636,
                          3644
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3638,
                            3644
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 180
                            },
                            "start": {
                              "column": 11,
                              "line": 180
                            }
                          }
                        }
                      },
                      "range": [
                        3633,
                        3644
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 180
                        },
                        "start": {
                          "column": 6,
                          "line": 180
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 180
                    },
                    "start": {
                      "column": 5,
                      "line": 180
                    }
                  }
                },
                "range": [
                  3629,
                  3648
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 180
                  },
                  "start": {
                    "column": 2,
                    "line": 180
                  }
                }
              }
            ],
            "range": [
              3625,
              3650
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 181
              },
              "start": {
                "column": 10,
                "line": 179
              }
            }
          },
          "range": [
            3619,
            3650
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 181
            },
            "start": {
              "column": 4,
              "line": 179
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3615,
        3650
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 181
        },
        "start": {
          "column": 0,
          "line": 179
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
            "name": "obj",
            "optional": false,
            "range": [
              3666,
              3669
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 183
              },
              "start": {
                "column": 14,
                "line": 183
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    3673,
                    3676
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 183
                    },
                    "start": {
                      "column": 21,
                      "line": 183
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3676,
                    3688
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3686,
                      3688
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 183
                      },
                      "start": {
                        "column": 34,
                        "line": 183
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          3680,
                          3684
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 183
                          },
                          "start": {
                            "column": 28,
                            "line": 183
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "range": [
                        3677,
                        3684
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 183
                        },
                        "start": {
                          "column": 25,
                          "line": 183
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 183
                    },
                    "start": {
                      "column": 24,
                      "line": 183
                    }
                  }
                },
                "range": [
                  3673,
                  3688
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 183
                  },
                  "start": {
                    "column": 21,
                    "line": 183
                  }
                }
              }
            ],
            "range": [
              3671,
              3690
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 183
              },
              "start": {
                "column": 19,
                "line": 183
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assignPartial",
          "optional": false,
          "range": [
            3652,
            3665
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 183
            },
            "start": {
              "column": 0,
              "line": 183
            }
          }
        },
        "optional": false,
        "range": [
          3652,
          3691
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 183
          },
          "start": {
            "column": 0,
            "line": 183
          }
        }
      },
      "range": [
        3652,
        3692
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 183
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 184
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
