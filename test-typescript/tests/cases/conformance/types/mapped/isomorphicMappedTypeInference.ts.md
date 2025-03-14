__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4186
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
                20,
                25
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                25,
                28
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    27,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              20,
              29
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          14,
          31
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        },
        "range": [
          8,
          11
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
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "range": [
          38,
          46
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "range": [
              70,
              71
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            64,
            71
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            59,
            60
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 6
            },
            "start": {
              "column": 5,
              "line": 6
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              77,
              83
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
                      80,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    80,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
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
                      78,
                      79
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
                    78,
                    79
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
                  78,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              74,
              77
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          "range": [
            74,
            83
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        },
        "range": [
          52,
          86
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          46,
          49
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
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        33,
        86
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      133,
                      138
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      140,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    133,
                    141
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
              ],
              "range": [
                131,
                143
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              124,
              144
            ],
            "loc": {
              "end": {
                "column": 24,
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
          118,
          146
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 30,
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
        "name": "box",
        "optional": false,
        "range": [
          97,
          100
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
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            },
            "range": [
              105,
              108
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              },
              "range": [
                107,
                108
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            }
          },
          "range": [
            104,
            108
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 9
            },
            "start": {
              "column": 16,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 9
          }
        },
        "range": [
          109,
          117
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              114,
              117
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
                    115,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                },
                "range": [
                  115,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              111,
              114
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 23,
                "line": 9
              }
            }
          },
          "range": [
            111,
            117
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 23,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 9
          }
        },
        "range": [
          100,
          103
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
                101,
                102
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
              101,
              102
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
          }
        ]
      },
      "range": [
        88,
        146
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  193,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
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
                  195,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                }
              },
              "range": [
                193,
                200
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              186,
              201
            ],
            "loc": {
              "end": {
                "column": 19,
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
          180,
          203
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 32,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "range": [
          157,
          162
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
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
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            },
            "range": [
              167,
              175
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  172,
                  175
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
                        173,
                        174
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
                      173,
                      174
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 24,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "range": [
                  169,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              },
              "range": [
                169,
                175
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            }
          },
          "range": [
            166,
            175
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 13
            },
            "start": {
              "column": 18,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 13
          },
          "start": {
            "column": 28,
            "line": 13
          }
        },
        "range": [
          176,
          179
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              178,
              179
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 30,
                "line": 13
              }
            }
          },
          "range": [
            178,
            179
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 13
            },
            "start": {
              "column": 30,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          162,
          165
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
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              163,
              164
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        148,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
                  "name": "result",
                  "optional": false,
                  "range": [
                    255,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      264,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        278,
                        281
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
                              279,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 18
                              },
                              "start": {
                                "column": 32,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            279,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 18
                            },
                            "start": {
                              "column": 32,
                              "line": 18
                            }
                          }
                        }
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
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boxified",
                      "optional": false,
                      "range": [
                        270,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 23,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      270,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    264,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                },
                "range": [
                  255,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              251,
              282
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          316,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          323,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        316,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "range": [
                              332,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 20
                              },
                              "start": {
                                "column": 24,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "range": [
                              336,
                              337
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 20
                              },
                              "start": {
                                "column": 28,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            332,
                            338
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 20
                            },
                            "start": {
                              "column": 24,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "box",
                        "optional": false,
                        "range": [
                          328,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        328,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      316,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    316,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                306,
                346
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 23,
                  "line": 19
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      296,
                      297
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
                  "init": null,
                  "range": [
                    296,
                    297
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
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                292,
                297
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                301,
                304
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            },
            "range": [
              287,
              346
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
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                358,
                364
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              351,
              365
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          245,
          367
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 40,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "range": [
          214,
          220
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
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
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            },
            "range": [
              227,
              230
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 17
                  },
                  "start": {
                    "column": 24,
                    "line": 17
                  }
                }
              },
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
                }
              }
            }
          },
          "range": [
            224,
            230
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 19,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 17
          },
          "start": {
            "column": 26,
            "line": 17
          }
        },
        "range": [
          231,
          244
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              241,
              244
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
                    242,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 37,
                      "line": 17
                    }
                  }
                },
                "range": [
                  242,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 17
                  },
                  "start": {
                    "column": 37,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 17
              },
              "start": {
                "column": 36,
                "line": 17
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "range": [
              233,
              241
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 28,
                "line": 17
              }
            }
          },
          "range": [
            233,
            244
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 17
            },
            "start": {
              "column": 28,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
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
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
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
                "column": 17,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        205,
        367
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 17
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
                  "name": "result",
                  "optional": false,
                  "range": [
                    436,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      445,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        451,
                        452
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 26
                        },
                        "start": {
                          "column": 23,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      451,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 26
                      },
                      "start": {
                        "column": 23,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    445,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 26
                    },
                    "start": {
                      "column": 17,
                      "line": 26
                    }
                  }
                },
                "range": [
                  436,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              432,
              453
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          487,
                          493
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          494,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 28
                          },
                          "start": {
                            "column": 15,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        487,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "range": [
                              505,
                              508
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 28
                              },
                              "start": {
                                "column": 26,
                                "line": 28
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "range": [
                              509,
                              510
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 28
                              },
                              "start": {
                                "column": 30,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            505,
                            511
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 28
                            },
                            "start": {
                              "column": 26,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unbox",
                        "optional": false,
                        "range": [
                          499,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 28
                          },
                          "start": {
                            "column": 20,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        499,
                        512
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 28
                        },
                        "start": {
                          "column": 20,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      487,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    487,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                477,
                519
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 23,
                  "line": 27
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      467,
                      468
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
                  "init": null,
                  "range": [
                    467,
                    468
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
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                463,
                468
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                472,
                475
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 18,
                  "line": 27
                }
              }
            },
            "range": [
              458,
              519
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                531,
                537
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "range": [
              524,
              538
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          426,
          540
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 57,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "range": [
          378,
          386
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
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
                "column": 52,
                "line": 25
              },
              "start": {
                "column": 39,
                "line": 25
              }
            },
            "range": [
              408,
              421
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  418,
                  421
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
                        419,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 25
                        },
                        "start": {
                          "column": 50,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      419,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 25
                      },
                      "start": {
                        "column": 50,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 25
                  },
                  "start": {
                    "column": 49,
                    "line": 25
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  410,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 25
                  },
                  "start": {
                    "column": 41,
                    "line": 25
                  }
                }
              },
              "range": [
                410,
                421
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 25
                },
                "start": {
                  "column": 41,
                  "line": 25
                }
              }
            }
          },
          "range": [
            405,
            421
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 25
            },
            "start": {
              "column": 36,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 56,
            "line": 25
          },
          "start": {
            "column": 53,
            "line": 25
          }
        },
        "range": [
          422,
          425
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              424,
              425
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 25
              },
              "start": {
                "column": 55,
                "line": 25
              }
            }
          },
          "range": [
            424,
            425
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 25
            },
            "start": {
              "column": 55,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
          }
        },
        "range": [
          386,
          404
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                397,
                403
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 28,
                  "line": 25
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
                387,
                388
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 18,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              387,
              403
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 25
              },
              "start": {
                "column": 18,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        369,
        540
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 25
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
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            636,
                            639
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 35
                            },
                            "start": {
                              "column": 8,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            640,
                            641
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          636,
                          642
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
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
                          643,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 35
                          },
                          "start": {
                            "column": 15,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        636,
                        648
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "values",
                        "optional": false,
                        "range": [
                          651,
                          657
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 35
                          },
                          "start": {
                            "column": 23,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          658,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 35
                          },
                          "start": {
                            "column": 30,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        651,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 35
                        },
                        "start": {
                          "column": 23,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      636,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    636,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                626,
                667
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 26,
                  "line": 34
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      613,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    613,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 34
                    },
                    "start": {
                      "column": 13,
                      "line": 34
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                609,
                614
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "range": [
                618,
                624
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 34
                },
                "start": {
                  "column": 18,
                  "line": 34
                }
              }
            },
            "range": [
              604,
              667
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          598,
          669
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 56,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignBoxified",
        "optional": false,
        "range": [
          551,
          565
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
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
                "column": 43,
                "line": 33
              },
              "start": {
                "column": 30,
                "line": 33
              }
            },
            "range": [
              572,
              585
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  582,
                  585
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
                        583,
                        584
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 33
                        },
                        "start": {
                          "column": 41,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      583,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 33
                      },
                      "start": {
                        "column": 41,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 33
                  },
                  "start": {
                    "column": 40,
                    "line": 33
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  574,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 33
                  },
                  "start": {
                    "column": 32,
                    "line": 33
                  }
                }
              },
              "range": [
                574,
                585
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 33
                },
                "start": {
                  "column": 32,
                  "line": 33
                }
              }
            }
          },
          "range": [
            569,
            585
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 33
            },
            "start": {
              "column": 27,
              "line": 33
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 33
              },
              "start": {
                "column": 51,
                "line": 33
              }
            },
            "range": [
              593,
              596
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  595,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 33
                  },
                  "start": {
                    "column": 53,
                    "line": 33
                  }
                }
              },
              "range": [
                595,
                596
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 33
                },
                "start": {
                  "column": 53,
                  "line": 33
                }
              }
            }
          },
          "range": [
            587,
            596
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 33
            },
            "start": {
              "column": 45,
              "line": 33
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 33
          },
          "start": {
            "column": 23,
            "line": 33
          }
        },
        "range": [
          565,
          568
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
                566,
                567
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 24,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              566,
              567
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        542,
        669
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    695,
                    696
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          709,
                          710
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "42",
                        "value": 42,
                        "range": [
                          712,
                          714
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 41
                          },
                          "start": {
                            "column": 11,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        709,
                        714
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          724,
                          725
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 42
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          727,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 42
                          },
                          "start": {
                            "column": 11,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        724,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 42
                        },
                        "start": {
                          "column": 8,
                          "line": 42
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          744,
                          745
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 43
                          },
                          "start": {
                            "column": 8,
                            "line": 43
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          747,
                          751
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 43
                          },
                          "start": {
                            "column": 11,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        744,
                        751
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 43
                        },
                        "start": {
                          "column": 8,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "range": [
                    699,
                    757
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 44
                    },
                    "start": {
                      "column": 12,
                      "line": 40
                    }
                  }
                },
                "range": [
                  695,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              691,
              758
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 40
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
                  "range": [
                    767,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        778,
                        779
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 45
                        },
                        "start": {
                          "column": 19,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boxify",
                    "optional": false,
                    "range": [
                      771,
                      777
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 45
                      },
                      "start": {
                        "column": 12,
                        "line": 45
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    771,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                },
                "range": [
                  767,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              763,
              781
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                        "column": 17,
                        "line": 46
                      },
                      "start": {
                        "column": 9,
                        "line": 46
                      }
                    },
                    "range": [
                      791,
                      799
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        793,
                        799
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    790,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        802,
                        803
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 46
                        },
                        "start": {
                          "column": 20,
                          "line": 46
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        804,
                        805
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 46
                        },
                        "start": {
                          "column": 22,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      802,
                      805
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 46
                      },
                      "start": {
                        "column": 20,
                        "line": 46
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
                      806,
                      811
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 46
                      },
                      "start": {
                        "column": 24,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    802,
                    811
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 46
                    },
                    "start": {
                      "column": 20,
                      "line": 46
                    }
                  }
                },
                "range": [
                  790,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              786,
              812
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          685,
          814
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 14,
            "line": 39
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
          680,
          682
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [],
      "range": [
        671,
        814
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 39
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    840,
                    841
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          854,
                          855
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 51
                          },
                          "start": {
                            "column": 8,
                            "line": 51
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
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              861,
                              863
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 51
                              },
                              "start": {
                                "column": 15,
                                "line": 51
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            857,
                            860
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 51
                            },
                            "start": {
                              "column": 11,
                              "line": 51
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          857,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 51
                          },
                          "start": {
                            "column": 11,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        854,
                        864
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 51
                        },
                        "start": {
                          "column": 8,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          874,
                          875
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 52
                          },
                          "start": {
                            "column": 8,
                            "line": 52
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
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              881,
                              888
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 52
                              },
                              "start": {
                                "column": 15,
                                "line": 52
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            877,
                            880
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 52
                            },
                            "start": {
                              "column": 11,
                              "line": 52
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          877,
                          889
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 52
                          },
                          "start": {
                            "column": 11,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        874,
                        889
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 52
                        },
                        "start": {
                          "column": 8,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          899,
                          900
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 53
                          },
                          "start": {
                            "column": 8,
                            "line": 53
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
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              906,
                              910
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 53
                              },
                              "start": {
                                "column": 15,
                                "line": 53
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            902,
                            905
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 53
                            },
                            "start": {
                              "column": 11,
                              "line": 53
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          902,
                          911
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 53
                          },
                          "start": {
                            "column": 11,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        899,
                        911
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 53
                        },
                        "start": {
                          "column": 8,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    844,
                    917
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 54
                    },
                    "start": {
                      "column": 12,
                      "line": 50
                    }
                  }
                },
                "range": [
                  840,
                  917
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              836,
              918
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 50
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    927,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        940,
                        941
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 55
                        },
                        "start": {
                          "column": 21,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "range": [
                      931,
                      939
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 55
                      },
                      "start": {
                        "column": 12,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    931,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                },
                "range": [
                  927,
                  942
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              923,
              943
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
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
                        "column": 17,
                        "line": 56
                      },
                      "start": {
                        "column": 9,
                        "line": 56
                      }
                    },
                    "range": [
                      953,
                      961
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        955,
                        961
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 56
                        },
                        "start": {
                          "column": 11,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    952,
                    961
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      964,
                      965
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 56
                      },
                      "start": {
                        "column": 20,
                        "line": 56
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      966,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 56
                      },
                      "start": {
                        "column": 22,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    964,
                    967
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 20,
                      "line": 56
                    }
                  }
                },
                "range": [
                  952,
                  967
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              948,
              968
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          830,
          970
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 14,
            "line": 49
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
          825,
          827
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [],
      "range": [
        816,
        970
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 49
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    996,
                    997
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1010,
                          1011
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 61
                          },
                          "start": {
                            "column": 8,
                            "line": 61
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
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              1017,
                              1019
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 61
                              },
                              "start": {
                                "column": 15,
                                "line": 61
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            1013,
                            1016
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 61
                            },
                            "start": {
                              "column": 11,
                              "line": 61
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1013,
                          1020
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 61
                          },
                          "start": {
                            "column": 11,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1010,
                        1020
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 61
                        },
                        "start": {
                          "column": 8,
                          "line": 61
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1030,
                          1031
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 62
                          },
                          "start": {
                            "column": 8,
                            "line": 62
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
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              1037,
                              1044
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 62
                              },
                              "start": {
                                "column": 15,
                                "line": 62
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            1033,
                            1036
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 62
                            },
                            "start": {
                              "column": 11,
                              "line": 62
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1033,
                          1045
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 62
                          },
                          "start": {
                            "column": 11,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1030,
                        1045
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 62
                        },
                        "start": {
                          "column": 8,
                          "line": 62
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          1055,
                          1056
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 63
                          },
                          "start": {
                            "column": 8,
                            "line": 63
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
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              1062,
                              1066
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 63
                              },
                              "start": {
                                "column": 15,
                                "line": 63
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            1058,
                            1061
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 63
                            },
                            "start": {
                              "column": 11,
                              "line": 63
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1058,
                          1067
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 63
                          },
                          "start": {
                            "column": 11,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1055,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 63
                        },
                        "start": {
                          "column": 8,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "range": [
                    1000,
                    1073
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 64
                    },
                    "start": {
                      "column": 12,
                      "line": 60
                    }
                  }
                },
                "range": [
                  996,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              992,
              1074
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 64
              },
              "start": {
                "column": 4,
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    1094,
                    1095
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 65
                    },
                    "start": {
                      "column": 19,
                      "line": 65
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
                        "name": "c",
                        "optional": false,
                        "range": [
                          1099,
                          1100
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 65
                          },
                          "start": {
                            "column": 24,
                            "line": 65
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          1102,
                          1107
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 65
                          },
                          "start": {
                            "column": 27,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1099,
                        1107
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 65
                        },
                        "start": {
                          "column": 24,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "range": [
                    1097,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 65
                    },
                    "start": {
                      "column": 22,
                      "line": 65
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assignBoxified",
                "optional": false,
                "range": [
                  1079,
                  1093
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
                1079,
                1110
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1079,
              1111
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          986,
          1113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 14,
            "line": 59
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
          981,
          983
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
          }
        }
      },
      "params": [],
      "range": [
        972,
        1113
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 59
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    1139,
                    1140
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1153,
                          1154
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 70
                          },
                          "start": {
                            "column": 8,
                            "line": 70
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
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              1160,
                              1162
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 70
                              },
                              "start": {
                                "column": 15,
                                "line": 70
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            1156,
                            1159
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 70
                            },
                            "start": {
                              "column": 11,
                              "line": 70
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1156,
                          1163
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 70
                          },
                          "start": {
                            "column": 11,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1153,
                        1163
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1173,
                          1174
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 71
                          },
                          "start": {
                            "column": 8,
                            "line": 71
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
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              1180,
                              1187
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 71
                              },
                              "start": {
                                "column": 15,
                                "line": 71
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            1176,
                            1179
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 71
                            },
                            "start": {
                              "column": 11,
                              "line": 71
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1176,
                          1188
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 71
                          },
                          "start": {
                            "column": 11,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1173,
                        1188
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 71
                        },
                        "start": {
                          "column": 8,
                          "line": 71
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "range": [
                          1198,
                          1199
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 72
                          },
                          "start": {
                            "column": 8,
                            "line": 72
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
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              1205,
                              1209
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 72
                              },
                              "start": {
                                "column": 15,
                                "line": 72
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "box",
                          "optional": false,
                          "range": [
                            1201,
                            1204
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 72
                            },
                            "start": {
                              "column": 11,
                              "line": 72
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1201,
                          1210
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 72
                          },
                          "start": {
                            "column": 11,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        1198,
                        1210
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 72
                        },
                        "start": {
                          "column": 8,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "range": [
                    1143,
                    1216
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 73
                    },
                    "start": {
                      "column": 12,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1139,
                  1216
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1135,
              1217
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1222,
                  1223
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1242,
                          1243
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 74
                          },
                          "start": {
                            "column": 24,
                            "line": 74
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unboxify",
                      "optional": false,
                      "range": [
                        1233,
                        1241
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 74
                        },
                        "start": {
                          "column": 15,
                          "line": 74
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1233,
                      1244
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 74
                      },
                      "start": {
                        "column": 15,
                        "line": 74
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boxify",
                  "optional": false,
                  "range": [
                    1226,
                    1232
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "optional": false,
                "range": [
                  1226,
                  1245
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              },
              "range": [
                1222,
                1245
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              1222,
              1246
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1251,
                  1252
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1271,
                          1272
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 75
                          },
                          "start": {
                            "column": 24,
                            "line": 75
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boxify",
                      "optional": false,
                      "range": [
                        1264,
                        1270
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 75
                        },
                        "start": {
                          "column": 17,
                          "line": 75
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1264,
                      1273
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 75
                      },
                      "start": {
                        "column": 17,
                        "line": 75
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unboxify",
                  "optional": false,
                  "range": [
                    1255,
                    1263
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                "optional": false,
                "range": [
                  1255,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 75
                  },
                  "start": {
                    "column": 8,
                    "line": 75
                  }
                }
              },
              "range": [
                1251,
                1274
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              1251,
              1275
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          1129,
          1277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 14,
            "line": 68
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
          1124,
          1126
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 68
          },
          "start": {
            "column": 9,
            "line": 68
          }
        }
      },
      "params": [],
      "range": [
        1115,
        1277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 68
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                1355,
                1358
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 79
                },
                "start": {
                  "column": 11,
                  "line": 79
                }
              }
            },
            "range": [
              1348,
              1359
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1342,
          1361
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 63,
            "line": 78
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeRecord",
        "optional": false,
        "range": [
          1288,
          1298
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
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
                "column": 61,
                "line": 78
              },
              "start": {
                "column": 44,
                "line": 78
              }
            },
            "range": [
              1323,
              1340
            ],
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
                    1333,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 78
                    },
                    "start": {
                      "column": 54,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1333,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 78
                  },
                  "start": {
                    "column": 54,
                    "line": 78
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1328,
                  1329
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 78
                  },
                  "start": {
                    "column": 49,
                    "line": 78
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1337,
                    1338
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 78
                    },
                    "start": {
                      "column": 58,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1337,
                  1338
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 78
                  },
                  "start": {
                    "column": 58,
                    "line": 78
                  }
                }
              },
              "range": [
                1325,
                1340
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 78
                },
                "start": {
                  "column": 46,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1320,
            1340
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 78
            },
            "start": {
              "column": 41,
              "line": 78
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 78
          },
          "start": {
            "column": 19,
            "line": 78
          }
        },
        "range": [
          1298,
          1319
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
                1299,
                1300
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 78
                },
                "start": {
                  "column": 20,
                  "line": 78
                }
              }
            },
            "out": false,
            "range": [
              1299,
              1300
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 78
              },
              "start": {
                "column": 20,
                "line": 78
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                1312,
                1318
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 78
                },
                "start": {
                  "column": 33,
                  "line": 78
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
                1302,
                1303
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 78
                },
                "start": {
                  "column": 23,
                  "line": 78
                }
              }
            },
            "out": false,
            "range": [
              1302,
              1318
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 78
              },
              "start": {
                "column": 23,
                "line": 78
              }
            }
          }
        ]
      },
      "range": [
        1279,
        1361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 78
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    1396,
                    1397
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              1421,
                              1422
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 84
                              },
                              "start": {
                                "column": 8,
                                "line": 84
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
                                "type": "Literal",
                                "raw": "42",
                                "value": 42,
                                "range": [
                                  1428,
                                  1430
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 84
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 84
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "range": [
                                1424,
                                1427
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 84
                                },
                                "start": {
                                  "column": 11,
                                  "line": 84
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1424,
                              1431
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 84
                              },
                              "start": {
                                "column": 11,
                                "line": 84
                              }
                            }
                          },
                          "range": [
                            1421,
                            1431
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 84
                            },
                            "start": {
                              "column": 8,
                              "line": 84
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              1441,
                              1442
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 85
                              },
                              "start": {
                                "column": 8,
                                "line": 85
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
                                "type": "Literal",
                                "raw": "\"hello\"",
                                "value": "hello",
                                "range": [
                                  1448,
                                  1455
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 85
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 85
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "range": [
                                1444,
                                1447
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 85
                                },
                                "start": {
                                  "column": 11,
                                  "line": 85
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1444,
                              1456
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 85
                              },
                              "start": {
                                "column": 11,
                                "line": 85
                              }
                            }
                          },
                          "range": [
                            1441,
                            1456
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 85
                            },
                            "start": {
                              "column": 8,
                              "line": 85
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              1466,
                              1467
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 86
                              },
                              "start": {
                                "column": 8,
                                "line": 86
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
                                "type": "Literal",
                                "raw": "true",
                                "value": true,
                                "range": [
                                  1473,
                                  1477
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 86
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 86
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "range": [
                                1469,
                                1472
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 86
                                },
                                "start": {
                                  "column": 11,
                                  "line": 86
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1469,
                              1478
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 86
                              },
                              "start": {
                                "column": 11,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            1466,
                            1478
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 86
                            },
                            "start": {
                              "column": 8,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "range": [
                        1411,
                        1484
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 87
                        },
                        "start": {
                          "column": 23,
                          "line": 83
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "makeRecord",
                    "optional": false,
                    "range": [
                      1400,
                      1410
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 83
                      },
                      "start": {
                        "column": 12,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1400,
                    1485
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 87
                    },
                    "start": {
                      "column": 12,
                      "line": 83
                    }
                  }
                },
                "range": [
                  1396,
                  1485
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 87
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1392,
              1486
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 83
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    1495,
                    1496
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1508,
                        1509
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
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "range": [
                      1499,
                      1507
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 88
                      },
                      "start": {
                        "column": 12,
                        "line": 88
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1499,
                    1510
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 88
                    },
                    "start": {
                      "column": 12,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1495,
                  1510
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1491,
              1511
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
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
                        "column": 36,
                        "line": 89
                      },
                      "start": {
                        "column": 9,
                        "line": 89
                      }
                    },
                    "range": [
                      1521,
                      1548
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1523,
                            1529
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 89
                            },
                            "start": {
                              "column": 11,
                              "line": 89
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1532,
                            1538
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 89
                            },
                            "start": {
                              "column": 20,
                              "line": 89
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1541,
                            1548
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 89
                            },
                            "start": {
                              "column": 29,
                              "line": 89
                            }
                          }
                        }
                      ],
                      "range": [
                        1523,
                        1548
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 89
                        },
                        "start": {
                          "column": 11,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    1520,
                    1548
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1551,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 89
                      },
                      "start": {
                        "column": 39,
                        "line": 89
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1553,
                      1554
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 89
                      },
                      "start": {
                        "column": 41,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1551,
                    1554
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 89
                    },
                    "start": {
                      "column": 39,
                      "line": 89
                    }
                  }
                },
                "range": [
                  1520,
                  1554
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1516,
              1555
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "range": [
          1386,
          1557
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 23,
            "line": 82
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
          1372,
          1374
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 82
          },
          "start": {
            "column": 9,
            "line": 82
          }
        }
      },
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
                "column": 21,
                "line": 82
              },
              "start": {
                "column": 13,
                "line": 82
              }
            },
            "range": [
              1376,
              1384
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1378,
                1384
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 82
                },
                "start": {
                  "column": 15,
                  "line": 82
                }
              }
            }
          },
          "range": [
            1375,
            1384
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 82
            },
            "start": {
              "column": 12,
              "line": 82
            }
          }
        }
      ],
      "range": [
        1363,
        1557
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 82
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                1624,
                1627
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 93
                },
                "start": {
                  "column": 11,
                  "line": 93
                }
              }
            },
            "range": [
              1617,
              1628
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          }
        ],
        "range": [
          1611,
          1630
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 52,
            "line": 92
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeDictionary",
        "optional": false,
        "range": [
          1568,
          1582
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 92
          },
          "start": {
            "column": 9,
            "line": 92
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
                "column": 50,
                "line": 92
              },
              "start": {
                "column": 30,
                "line": 92
              }
            },
            "range": [
              1589,
              1609
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
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
                            "line": 92
                          },
                          "start": {
                            "column": 36,
                            "line": 92
                          }
                        },
                        "range": [
                          1595,
                          1603
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1597,
                            1603
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 92
                            },
                            "start": {
                              "column": 38,
                              "line": 92
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
                          "column": 44,
                          "line": 92
                        },
                        "start": {
                          "column": 35,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 92
                      },
                      "start": {
                        "column": 45,
                        "line": 92
                      }
                    },
                    "range": [
                      1604,
                      1607
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1606,
                          1607
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 92
                          },
                          "start": {
                            "column": 47,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        1606,
                        1607
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 92
                        },
                        "start": {
                          "column": 47,
                          "line": 92
                        }
                      }
                    }
                  },
                  "range": [
                    1593,
                    1607
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 92
                    },
                    "start": {
                      "column": 34,
                      "line": 92
                    }
                  }
                }
              ],
              "range": [
                1591,
                1609
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 92
                },
                "start": {
                  "column": 32,
                  "line": 92
                }
              }
            }
          },
          "range": [
            1586,
            1609
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 92
            },
            "start": {
              "column": 27,
              "line": 92
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 92
          },
          "start": {
            "column": 23,
            "line": 92
          }
        },
        "range": [
          1582,
          1585
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
                1583,
                1584
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 92
                },
                "start": {
                  "column": 24,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              1583,
              1584
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 92
              },
              "start": {
                "column": 24,
                "line": 92
              }
            }
          }
        ]
      },
      "range": [
        1559,
        1630
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 92
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    1665,
                    1666
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 97
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              1694,
                              1695
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 98
                              },
                              "start": {
                                "column": 8,
                                "line": 98
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
                                "type": "Literal",
                                "raw": "42",
                                "value": 42,
                                "range": [
                                  1701,
                                  1703
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 98
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 98
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "range": [
                                1697,
                                1700
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 98
                                },
                                "start": {
                                  "column": 11,
                                  "line": 98
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1697,
                              1704
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 98
                              },
                              "start": {
                                "column": 11,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            1694,
                            1704
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 98
                            },
                            "start": {
                              "column": 8,
                              "line": 98
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              1714,
                              1715
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 99
                              },
                              "start": {
                                "column": 8,
                                "line": 99
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
                                "type": "Literal",
                                "raw": "\"hello\"",
                                "value": "hello",
                                "range": [
                                  1721,
                                  1728
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 99
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "range": [
                                1717,
                                1720
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 99
                                },
                                "start": {
                                  "column": 11,
                                  "line": 99
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1717,
                              1729
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 99
                              },
                              "start": {
                                "column": 11,
                                "line": 99
                              }
                            }
                          },
                          "range": [
                            1714,
                            1729
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 99
                            },
                            "start": {
                              "column": 8,
                              "line": 99
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              1739,
                              1740
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 100
                              },
                              "start": {
                                "column": 8,
                                "line": 100
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
                                "type": "Literal",
                                "raw": "true",
                                "value": true,
                                "range": [
                                  1746,
                                  1750
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 100
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "range": [
                                1742,
                                1745
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 100
                                },
                                "start": {
                                  "column": 11,
                                  "line": 100
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1742,
                              1751
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 100
                              },
                              "start": {
                                "column": 11,
                                "line": 100
                              }
                            }
                          },
                          "range": [
                            1739,
                            1751
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 100
                            },
                            "start": {
                              "column": 8,
                              "line": 100
                            }
                          }
                        }
                      ],
                      "range": [
                        1684,
                        1757
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 101
                        },
                        "start": {
                          "column": 27,
                          "line": 97
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "makeDictionary",
                    "optional": false,
                    "range": [
                      1669,
                      1683
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 97
                      },
                      "start": {
                        "column": 12,
                        "line": 97
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1669,
                    1758
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 101
                    },
                    "start": {
                      "column": 12,
                      "line": 97
                    }
                  }
                },
                "range": [
                  1665,
                  1758
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 101
                  },
                  "start": {
                    "column": 8,
                    "line": 97
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1661,
              1759
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 97
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    1768,
                    1769
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1781,
                        1782
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 102
                        },
                        "start": {
                          "column": 21,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "range": [
                      1772,
                      1780
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 102
                      },
                      "start": {
                        "column": 12,
                        "line": 102
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1772,
                    1783
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 102
                    },
                    "start": {
                      "column": 12,
                      "line": 102
                    }
                  }
                },
                "range": [
                  1768,
                  1783
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 102
                  },
                  "start": {
                    "column": 8,
                    "line": 102
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1764,
              1784
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
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
                        "column": 36,
                        "line": 103
                      },
                      "start": {
                        "column": 9,
                        "line": 103
                      }
                    },
                    "range": [
                      1794,
                      1821
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1796,
                            1802
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 103
                            },
                            "start": {
                              "column": 11,
                              "line": 103
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1805,
                            1811
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 103
                            },
                            "start": {
                              "column": 20,
                              "line": 103
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1814,
                            1821
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 103
                            },
                            "start": {
                              "column": 29,
                              "line": 103
                            }
                          }
                        }
                      ],
                      "range": [
                        1796,
                        1821
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 103
                        },
                        "start": {
                          "column": 11,
                          "line": 103
                        }
                      }
                    }
                  },
                  "range": [
                    1793,
                    1821
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1824,
                      1825
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 103
                      },
                      "start": {
                        "column": 39,
                        "line": 103
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      1826,
                      1827
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 103
                      },
                      "start": {
                        "column": 41,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1824,
                    1828
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 103
                    },
                    "start": {
                      "column": 39,
                      "line": 103
                    }
                  }
                },
                "range": [
                  1793,
                  1828
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 103
                  },
                  "start": {
                    "column": 8,
                    "line": 103
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1789,
              1829
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          }
        ],
        "range": [
          1655,
          1831
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 104
          },
          "start": {
            "column": 23,
            "line": 96
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
          1641,
          1643
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 96
          },
          "start": {
            "column": 9,
            "line": 96
          }
        }
      },
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
                "column": 21,
                "line": 96
              },
              "start": {
                "column": 13,
                "line": 96
              }
            },
            "range": [
              1645,
              1653
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1647,
                1653
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 96
                },
                "start": {
                  "column": 15,
                  "line": 96
                }
              }
            }
          },
          "range": [
            1644,
            1653
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 96
            },
            "start": {
              "column": 12,
              "line": 96
            }
          }
        }
      ],
      "range": [
        1632,
        1831
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 96
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
        "name": "validate",
        "optional": false,
        "range": [
          1850,
          1858
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 106
          },
          "start": {
            "column": 17,
            "line": 106
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
                "column": 59,
                "line": 106
              },
              "start": {
                "column": 32,
                "line": 106
              }
            },
            "range": [
              1865,
              1892
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      1881,
                      1882
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 106
                      },
                      "start": {
                        "column": 48,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    1881,
                    1882
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 106
                    },
                    "start": {
                      "column": 48,
                      "line": 106
                    }
                  }
                },
                "range": [
                  1875,
                  1882
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 106
                  },
                  "start": {
                    "column": 42,
                    "line": 106
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1870,
                  1871
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 106
                  },
                  "start": {
                    "column": 37,
                    "line": 106
                  }
                }
              },
              "nameType": null,
              "optional": true,
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
                      1888,
                      1889
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 106
                      },
                      "start": {
                        "column": 55,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    1888,
                    1889
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 106
                    },
                    "start": {
                      "column": 55,
                      "line": 106
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
                      1886,
                      1887
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 106
                      },
                      "start": {
                        "column": 53,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    1886,
                    1887
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 106
                    },
                    "start": {
                      "column": 53,
                      "line": 106
                    }
                  }
                },
                "range": [
                  1886,
                  1890
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 106
                  },
                  "start": {
                    "column": 53,
                    "line": 106
                  }
                }
              },
              "range": [
                1867,
                1892
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 106
                },
                "start": {
                  "column": 34,
                  "line": 106
                }
              }
            }
          },
          "range": [
            1862,
            1892
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 106
            },
            "start": {
              "column": 29,
              "line": 106
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 63,
            "line": 106
          },
          "start": {
            "column": 60,
            "line": 106
          }
        },
        "range": [
          1893,
          1896
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1895,
              1896
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 106
              },
              "start": {
                "column": 62,
                "line": 106
              }
            }
          },
          "range": [
            1895,
            1896
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 106
            },
            "start": {
              "column": 62,
              "line": 106
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 106
          },
          "start": {
            "column": 25,
            "line": 106
          }
        },
        "range": [
          1858,
          1861
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
                1859,
                1860
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 106
                },
                "start": {
                  "column": 26,
                  "line": 106
                }
              }
            },
            "out": false,
            "range": [
              1859,
              1860
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 106
              },
              "start": {
                "column": 26,
                "line": 106
              }
            }
          }
        ]
      },
      "range": [
        1833,
        1897
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 106
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
        "name": "clone",
        "optional": false,
        "range": [
          1915,
          1920
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 107
              },
              "start": {
                "column": 29,
                "line": 107
              }
            },
            "range": [
              1927,
              1962
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      1952,
                      1953
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 107
                      },
                      "start": {
                        "column": 54,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    1952,
                    1953
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 107
                    },
                    "start": {
                      "column": 54,
                      "line": 107
                    }
                  }
                },
                "range": [
                  1946,
                  1953
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 107
                  },
                  "start": {
                    "column": 48,
                    "line": 107
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1941,
                  1942
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 107
                  },
                  "start": {
                    "column": 43,
                    "line": 107
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
                    "name": "P",
                    "optional": false,
                    "range": [
                      1958,
                      1959
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 107
                      },
                      "start": {
                        "column": 60,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    1958,
                    1959
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 107
                    },
                    "start": {
                      "column": 60,
                      "line": 107
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
                      1956,
                      1957
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 107
                      },
                      "start": {
                        "column": 58,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    1956,
                    1957
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 107
                    },
                    "start": {
                      "column": 58,
                      "line": 107
                    }
                  }
                },
                "range": [
                  1956,
                  1960
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 107
                  },
                  "start": {
                    "column": 58,
                    "line": 107
                  }
                }
              },
              "range": [
                1929,
                1962
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 107
                },
                "start": {
                  "column": 31,
                  "line": 107
                }
              }
            }
          },
          "range": [
            1924,
            1962
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 107
            },
            "start": {
              "column": 26,
              "line": 107
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 107
          },
          "start": {
            "column": 65,
            "line": 107
          }
        },
        "range": [
          1963,
          1966
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1965,
              1966
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 107
              },
              "start": {
                "column": 67,
                "line": 107
              }
            }
          },
          "range": [
            1965,
            1966
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 107
            },
            "start": {
              "column": 67,
              "line": 107
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 107
          },
          "start": {
            "column": 22,
            "line": 107
          }
        },
        "range": [
          1920,
          1923
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
                1921,
                1922
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 107
                },
                "start": {
                  "column": 23,
                  "line": 107
                }
              }
            },
            "out": false,
            "range": [
              1921,
              1922
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 107
              },
              "start": {
                "column": 23,
                "line": 107
              }
            }
          }
        ]
      },
      "range": [
        1898,
        1967
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
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
        "name": "validateAndClone",
        "optional": false,
        "range": [
          1985,
          2001
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 108
          },
          "start": {
            "column": 17,
            "line": 108
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
                "column": 76,
                "line": 108
              },
              "start": {
                "column": 40,
                "line": 108
              }
            },
            "range": [
              2008,
              2044
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      2033,
                      2034
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 108
                      },
                      "start": {
                        "column": 65,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    2033,
                    2034
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 108
                    },
                    "start": {
                      "column": 65,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2027,
                  2034
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 108
                  },
                  "start": {
                    "column": 59,
                    "line": 108
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  2022,
                  2023
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 108
                  },
                  "start": {
                    "column": 54,
                    "line": 108
                  }
                }
              },
              "nameType": null,
              "optional": true,
              "readonly": true,
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
                      2040,
                      2041
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 108
                      },
                      "start": {
                        "column": 72,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    2040,
                    2041
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 108
                    },
                    "start": {
                      "column": 72,
                      "line": 108
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
                      2038,
                      2039
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 108
                      },
                      "start": {
                        "column": 70,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    2038,
                    2039
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 108
                    },
                    "start": {
                      "column": 70,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2038,
                  2042
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 108
                  },
                  "start": {
                    "column": 70,
                    "line": 108
                  }
                }
              },
              "range": [
                2010,
                2044
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 108
                },
                "start": {
                  "column": 42,
                  "line": 108
                }
              }
            }
          },
          "range": [
            2005,
            2044
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 108
            },
            "start": {
              "column": 37,
              "line": 108
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 108
          },
          "start": {
            "column": 77,
            "line": 108
          }
        },
        "range": [
          2045,
          2048
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2047,
              2048
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 108
              },
              "start": {
                "column": 79,
                "line": 108
              }
            }
          },
          "range": [
            2047,
            2048
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 108
            },
            "start": {
              "column": 79,
              "line": 108
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 108
          },
          "start": {
            "column": 33,
            "line": 108
          }
        },
        "range": [
          2001,
          2004
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
                2002,
                2003
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 108
                },
                "start": {
                  "column": 34,
                  "line": 108
                }
              }
            },
            "out": false,
            "range": [
              2002,
              2003
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 108
              },
              "start": {
                "column": 34,
                "line": 108
              }
            }
          }
        ]
      },
      "range": [
        1968,
        2049
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
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
          2056,
          2059
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 110
          },
          "start": {
            "column": 5,
            "line": 110
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
                2068,
                2069
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 111
                },
                "start": {
                  "column": 4,
                  "line": 111
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
                  "column": 14,
                  "line": 111
                },
                "start": {
                  "column": 6,
                  "line": 111
                }
              },
              "range": [
                2070,
                2078
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2072,
                  2078
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 111
                  }
                }
              }
            },
            "range": [
              2068,
              2079
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
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
                2093,
                2094
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 112
                },
                "start": {
                  "column": 13,
                  "line": 112
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 112
                },
                "start": {
                  "column": 14,
                  "line": 112
                }
              },
              "range": [
                2094,
                2102
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2096,
                  2102
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 112
                  },
                  "start": {
                    "column": 16,
                    "line": 112
                  }
                }
              }
            },
            "range": [
              2084,
              2103
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          }
        ],
        "range": [
          2062,
          2105
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 11,
            "line": 110
          }
        }
      },
      "range": [
        2051,
        2105
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 110
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
                  "range": [
                    2140,
                    2141
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 116
                    },
                    "start": {
                      "column": 8,
                      "line": 116
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2153,
                        2156
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 116
                        },
                        "start": {
                          "column": 21,
                          "line": 116
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validate",
                    "optional": false,
                    "range": [
                      2144,
                      2152
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 116
                      },
                      "start": {
                        "column": 12,
                        "line": 116
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2144,
                    2157
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 116
                    },
                    "start": {
                      "column": 12,
                      "line": 116
                    }
                  }
                },
                "range": [
                  2140,
                  2157
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 116
                  },
                  "start": {
                    "column": 8,
                    "line": 116
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2136,
              2158
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    2205,
                    2206
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2215,
                        2218
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 117
                        },
                        "start": {
                          "column": 18,
                          "line": 117
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clone",
                    "optional": false,
                    "range": [
                      2209,
                      2214
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 117
                      },
                      "start": {
                        "column": 12,
                        "line": 117
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2209,
                    2219
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 117
                    },
                    "start": {
                      "column": 12,
                      "line": 117
                    }
                  }
                },
                "range": [
                  2205,
                  2219
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 117
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2201,
              2220
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    2259,
                    2260
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 118
                    },
                    "start": {
                      "column": 8,
                      "line": 118
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2280,
                        2283
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 118
                        },
                        "start": {
                          "column": 29,
                          "line": 118
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validateAndClone",
                    "optional": false,
                    "range": [
                      2263,
                      2279
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 118
                      },
                      "start": {
                        "column": 12,
                        "line": 118
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2263,
                    2284
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 118
                    },
                    "start": {
                      "column": 12,
                      "line": 118
                    }
                  }
                },
                "range": [
                  2259,
                  2284
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 118
                  },
                  "start": {
                    "column": 8,
                    "line": 118
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2255,
              2285
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          }
        ],
        "range": [
          2130,
          2316
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 23,
            "line": 115
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          2116,
          2119
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 115
          },
          "start": {
            "column": 9,
            "line": 115
          }
        }
      },
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
                "column": 21,
                "line": 115
              },
              "start": {
                "column": 16,
                "line": 115
              }
            },
            "range": [
              2123,
              2128
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  2125,
                  2128
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 115
                  },
                  "start": {
                    "column": 18,
                    "line": 115
                  }
                }
              },
              "range": [
                2125,
                2128
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 115
                },
                "start": {
                  "column": 18,
                  "line": 115
                }
              }
            }
          },
          "range": [
            2120,
            2128
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 115
            },
            "start": {
              "column": 13,
              "line": 115
            }
          }
        }
      ],
      "range": [
        2107,
        2316
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "range": [
          2345,
          2349
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 123
          },
          "start": {
            "column": 5,
            "line": 123
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                2359,
                2363
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 123
                },
                "start": {
                  "column": 19,
                  "line": 123
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 123
                },
                "start": {
                  "column": 23,
                  "line": 123
                }
              },
              "range": [
                2363,
                2370
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2365,
                    2368
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 123
                    },
                    "start": {
                      "column": 25,
                      "line": 123
                    }
                  }
                },
                "range": [
                  2365,
                  2370
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 123
                  },
                  "start": {
                    "column": 25,
                    "line": 123
                  }
                }
              }
            },
            "range": [
              2356,
              2370
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 123
              },
              "start": {
                "column": 16,
                "line": 123
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 36,
              "line": 123
            },
            "start": {
              "column": 32,
              "line": 123
            }
          },
          "range": [
            2372,
            2376
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                2375,
                2376
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 123
                },
                "start": {
                  "column": 35,
                  "line": 123
                }
              }
            },
            "range": [
              2375,
              2376
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 123
              },
              "start": {
                "column": 35,
                "line": 123
              }
            }
          }
        },
        "range": [
          2355,
          2376
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 123
          },
          "start": {
            "column": 15,
            "line": 123
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 123
          },
          "start": {
            "column": 9,
            "line": 123
          }
        },
        "range": [
          2349,
          2352
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
                2350,
                2351
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 123
                },
                "start": {
                  "column": 10,
                  "line": 123
                }
              }
            },
            "out": false,
            "range": [
              2350,
              2351
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 123
              },
              "start": {
                "column": 10,
                "line": 123
              }
            }
          }
        ]
      },
      "range": [
        2340,
        2377
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "range": [
          2383,
          2387
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 124
          },
          "start": {
            "column": 5,
            "line": 124
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
                2411,
                2412
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 125
                },
                "start": {
                  "column": 16,
                  "line": 125
                }
              }
            },
            "range": [
              2411,
              2412
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 125
              },
              "start": {
                "column": 16,
                "line": 125
              }
            }
          },
          "range": [
            2405,
            2412
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 125
            },
            "start": {
              "column": 10,
              "line": 125
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            2400,
            2401
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 125
            },
            "start": {
              "column": 5,
              "line": 125
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2419,
                  2425
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
                          2422,
                          2423
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 125
                          },
                          "start": {
                            "column": 27,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2422,
                        2423
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 125
                        },
                        "start": {
                          "column": 27,
                          "line": 125
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
                          2420,
                          2421
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 125
                          },
                          "start": {
                            "column": 25,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2420,
                        2421
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 125
                        },
                        "start": {
                          "column": 25,
                          "line": 125
                        }
                      }
                    },
                    "range": [
                      2420,
                      2424
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 125
                      },
                      "start": {
                        "column": 25,
                        "line": 125
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 125
                  },
                  "start": {
                    "column": 24,
                    "line": 125
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "range": [
                  2415,
                  2419
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 125
                  },
                  "start": {
                    "column": 20,
                    "line": 125
                  }
                }
              },
              "range": [
                2415,
                2425
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 125
                },
                "start": {
                  "column": 20,
                  "line": 125
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2432,
                  2438
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
                          2435,
                          2436
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 125
                          },
                          "start": {
                            "column": 40,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2435,
                        2436
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 125
                        },
                        "start": {
                          "column": 40,
                          "line": 125
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
                          2433,
                          2434
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 125
                          },
                          "start": {
                            "column": 38,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2433,
                        2434
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 125
                        },
                        "start": {
                          "column": 38,
                          "line": 125
                        }
                      }
                    },
                    "range": [
                      2433,
                      2437
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 125
                      },
                      "start": {
                        "column": 38,
                        "line": 125
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 125
                  },
                  "start": {
                    "column": 37,
                    "line": 125
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "range": [
                  2428,
                  2432
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 125
                  },
                  "start": {
                    "column": 33,
                    "line": 125
                  }
                }
              },
              "range": [
                2428,
                2438
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 125
                },
                "start": {
                  "column": 33,
                  "line": 125
                }
              }
            }
          ],
          "range": [
            2415,
            2438
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 125
            },
            "start": {
              "column": 20,
              "line": 125
            }
          }
        },
        "range": [
          2393,
          2442
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 126
          },
          "start": {
            "column": 15,
            "line": 124
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 124
          },
          "start": {
            "column": 9,
            "line": 124
          }
        },
        "range": [
          2387,
          2390
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
                2388,
                2389
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 124
                },
                "start": {
                  "column": 10,
                  "line": 124
                }
              }
            },
            "out": false,
            "range": [
              2388,
              2389
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 124
              },
              "start": {
                "column": 10,
                "line": 124
              }
            }
          }
        ]
      },
      "range": [
        2378,
        2443
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 124
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
        "name": "applySpec",
        "optional": false,
        "range": [
          2709,
          2718
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 133
          },
          "start": {
            "column": 17,
            "line": 133
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
                "line": 133
              },
              "start": {
                "column": 33,
                "line": 133
              }
            },
            "range": [
              2725,
              2734
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2731,
                  2734
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
                        2732,
                        2733
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 133
                        },
                        "start": {
                          "column": 40,
                          "line": 133
                        }
                      }
                    },
                    "range": [
                      2732,
                      2733
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 133
                      },
                      "start": {
                        "column": 40,
                        "line": 133
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 133
                  },
                  "start": {
                    "column": 39,
                    "line": 133
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "range": [
                  2727,
                  2731
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 133
                  },
                  "start": {
                    "column": 35,
                    "line": 133
                  }
                }
              },
              "range": [
                2727,
                2734
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 133
                },
                "start": {
                  "column": 35,
                  "line": 133
                }
              }
            }
          },
          "range": [
            2722,
            2734
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 133
            },
            "start": {
              "column": 30,
              "line": 133
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 133
          },
          "start": {
            "column": 43,
            "line": 133
          }
        },
        "range": [
          2735,
          2758
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  2741,
                  2745
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 133
                  },
                  "start": {
                    "column": 49,
                    "line": 133
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 133
                  },
                  "start": {
                    "column": 53,
                    "line": 133
                  }
                },
                "range": [
                  2745,
                  2752
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2747,
                      2750
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 133
                      },
                      "start": {
                        "column": 55,
                        "line": 133
                      }
                    }
                  },
                  "range": [
                    2747,
                    2752
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 133
                    },
                    "start": {
                      "column": 55,
                      "line": 133
                    }
                  }
                }
              },
              "range": [
                2738,
                2752
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 133
                },
                "start": {
                  "column": 46,
                  "line": 133
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 133
              },
              "start": {
                "column": 62,
                "line": 133
              }
            },
            "range": [
              2754,
              2758
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2757,
                  2758
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 133
                  },
                  "start": {
                    "column": 65,
                    "line": 133
                  }
                }
              },
              "range": [
                2757,
                2758
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 133
                },
                "start": {
                  "column": 65,
                  "line": 133
                }
              }
            }
          },
          "range": [
            2737,
            2758
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 133
            },
            "start": {
              "column": 45,
              "line": 133
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 133
          },
          "start": {
            "column": 26,
            "line": 133
          }
        },
        "range": [
          2718,
          2721
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
                2719,
                2720
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 133
                },
                "start": {
                  "column": 27,
                  "line": 133
                }
              }
            },
            "out": false,
            "range": [
              2719,
              2720
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 133
              },
              "start": {
                "column": 27,
                "line": 133
              }
            }
          }
        ]
      },
      "range": [
        2692,
        2759
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 133
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
            "name": "g1",
            "optional": false,
            "range": [
              2840,
              2842
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 136
              },
              "start": {
                "column": 4,
                "line": 136
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
                      "name": "sum",
                      "optional": false,
                      "range": [
                        2861,
                        2864
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 137
                        },
                        "start": {
                          "column": 4,
                          "line": 137
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
                        "raw": "3",
                        "value": 3,
                        "range": [
                          2878,
                          2879
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 137
                          },
                          "start": {
                            "column": 21,
                            "line": 137
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 137
                              },
                              "start": {
                                "column": 11,
                                "line": 137
                              }
                            },
                            "range": [
                              2868,
                              2873
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                2870,
                                2873
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 137
                                },
                                "start": {
                                  "column": 13,
                                  "line": 137
                                }
                              }
                            }
                          },
                          "range": [
                            2867,
                            2873
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 137
                            },
                            "start": {
                              "column": 10,
                              "line": 137
                            }
                          }
                        }
                      ],
                      "range": [
                        2866,
                        2879
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 137
                        },
                        "start": {
                          "column": 9,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      2861,
                      2879
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 137
                      },
                      "start": {
                        "column": 4,
                        "line": 137
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
                        2885,
                        2891
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 138
                        },
                        "start": {
                          "column": 4,
                          "line": 138
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
                            "name": "mul",
                            "optional": false,
                            "range": [
                              2903,
                              2906
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 139
                              },
                              "start": {
                                "column": 8,
                                "line": 139
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
                              "raw": "\"n\"",
                              "value": "n",
                              "range": [
                                2920,
                                2923
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 139
                                },
                                "start": {
                                  "column": 25,
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 139
                                    }
                                  },
                                  "range": [
                                    2910,
                                    2915
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      2912,
                                      2915
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 139
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 139
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2909,
                                  2915
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 139
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 139
                                  }
                                }
                              }
                            ],
                            "range": [
                              2908,
                              2923
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 139
                              },
                              "start": {
                                "column": 13,
                                "line": 139
                              }
                            }
                          },
                          "range": [
                            2903,
                            2923
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 139
                            },
                            "start": {
                              "column": 8,
                              "line": 139
                            }
                          }
                        }
                      ],
                      "range": [
                        2893,
                        2929
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 140
                        },
                        "start": {
                          "column": 12,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      2885,
                      2929
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 140
                      },
                      "start": {
                        "column": 4,
                        "line": 138
                      }
                    }
                  }
                ],
                "range": [
                  2855,
                  2931
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 141
                  },
                  "start": {
                    "column": 19,
                    "line": 136
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "applySpec",
              "optional": false,
              "range": [
                2845,
                2854
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 136
                },
                "start": {
                  "column": 9,
                  "line": 136
                }
              }
            },
            "optional": false,
            "range": [
              2845,
              2932
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 141
              },
              "start": {
                "column": 9,
                "line": 136
              }
            }
          },
          "range": [
            2840,
            2932
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 141
            },
            "start": {
              "column": 4,
              "line": 136
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2836,
        2933
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 136
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
            "name": "g2",
            "optional": false,
            "range": [
              3008,
              3010
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 144
              },
              "start": {
                "column": 4,
                "line": 144
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3025,
                        3028
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 144
                        },
                        "start": {
                          "column": 21,
                          "line": 144
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
                            "name": "bar",
                            "optional": false,
                            "range": [
                              3032,
                              3035
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 144
                              },
                              "start": {
                                "column": 28,
                                "line": 144
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
                                  "name": "baz",
                                  "optional": false,
                                  "range": [
                                    3039,
                                    3042
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 144
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 144
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
                                    "raw": "true",
                                    "value": true,
                                    "range": [
                                      3056,
                                      3060
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 144
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 144
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 144
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 144
                                          }
                                        },
                                        "range": [
                                          3046,
                                          3051
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "range": [
                                            3048,
                                            3051
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 47,
                                              "line": 144
                                            },
                                            "start": {
                                              "column": 44,
                                              "line": 144
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        3045,
                                        3051
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 144
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 144
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    3044,
                                    3060
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 144
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 144
                                    }
                                  }
                                },
                                "range": [
                                  3039,
                                  3060
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 144
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 144
                                  }
                                }
                              }
                            ],
                            "range": [
                              3037,
                              3062
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 144
                              },
                              "start": {
                                "column": 33,
                                "line": 144
                              }
                            }
                          },
                          "range": [
                            3032,
                            3062
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 144
                            },
                            "start": {
                              "column": 28,
                              "line": 144
                            }
                          }
                        }
                      ],
                      "range": [
                        3030,
                        3064
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 144
                        },
                        "start": {
                          "column": 26,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      3025,
                      3064
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 144
                      },
                      "start": {
                        "column": 21,
                        "line": 144
                      }
                    }
                  }
                ],
                "range": [
                  3023,
                  3066
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 144
                  },
                  "start": {
                    "column": 19,
                    "line": 144
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "applySpec",
              "optional": false,
              "range": [
                3013,
                3022
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 144
                },
                "start": {
                  "column": 9,
                  "line": 144
                }
              }
            },
            "optional": false,
            "range": [
              3013,
              3067
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 144
              },
              "start": {
                "column": 9,
                "line": 144
              }
            }
          },
          "range": [
            3008,
            3067
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 144
            },
            "start": {
              "column": 4,
              "line": 144
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        3004,
        3068
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 144
        },
        "start": {
          "column": 0,
          "line": 144
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
            "range": [
              3098,
              3101
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 148
              },
              "start": {
                "column": 6,
                "line": 148
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "range": [
                3143,
                3149
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 148
                },
                "start": {
                  "column": 51,
                  "line": 148
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
                "name": "object",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 148
                    },
                    "start": {
                      "column": 22,
                      "line": 148
                    }
                  },
                  "range": [
                    3114,
                    3117
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3116,
                        3117
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 148
                        },
                        "start": {
                          "column": 24,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3116,
                      3117
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 148
                      },
                      "start": {
                        "column": 24,
                        "line": 148
                      }
                    }
                  }
                },
                "range": [
                  3108,
                  3117
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 148
                  },
                  "start": {
                    "column": 16,
                    "line": 148
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
                      "column": 46,
                      "line": 148
                    },
                    "start": {
                      "column": 34,
                      "line": 148
                    }
                  },
                  "range": [
                    3126,
                    3138
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3135,
                        3138
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
                              3136,
                              3137
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 148
                              },
                              "start": {
                                "column": 44,
                                "line": 148
                              }
                            }
                          },
                          "range": [
                            3136,
                            3137
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 148
                            },
                            "start": {
                              "column": 44,
                              "line": 148
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 148
                        },
                        "start": {
                          "column": 43,
                          "line": 148
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "range": [
                        3128,
                        3135
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 148
                        },
                        "start": {
                          "column": 36,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3128,
                      3138
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 148
                      },
                      "start": {
                        "column": 36,
                        "line": 148
                      }
                    }
                  }
                },
                "range": [
                  3119,
                  3138
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 148
                  },
                  "start": {
                    "column": 27,
                    "line": 148
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 148
                },
                "start": {
                  "column": 12,
                  "line": 148
                }
              },
              "range": [
                3104,
                3107
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
                      3105,
                      3106
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 148
                      },
                      "start": {
                        "column": 13,
                        "line": 148
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3105,
                    3106
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 148
                    },
                    "start": {
                      "column": 13,
                      "line": 148
                    }
                  }
                }
              ]
            },
            "range": [
              3104,
              3149
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 148
              },
              "start": {
                "column": 12,
                "line": 148
              }
            }
          },
          "range": [
            3098,
            3149
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 148
            },
            "start": {
              "column": 6,
              "line": 148
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3092,
        3150
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
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
            "name": "o",
            "optional": false,
            "range": [
              3155,
              3156
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 149
              },
              "start": {
                "column": 4,
                "line": 149
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    3160,
                    3161
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 149
                    },
                    "start": {
                      "column": 9,
                      "line": 149
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    3163,
                    3164
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 149
                    },
                    "start": {
                      "column": 12,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3160,
                  3164
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 149
                  },
                  "start": {
                    "column": 9,
                    "line": 149
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    3166,
                    3167
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 149
                    },
                    "start": {
                      "column": 15,
                      "line": 149
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "7",
                  "value": 7,
                  "range": [
                    3169,
                    3170
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 149
                    },
                    "start": {
                      "column": 18,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3166,
                  3170
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 149
                  },
                  "start": {
                    "column": 15,
                    "line": 149
                  }
                }
              }
            ],
            "range": [
              3159,
              3171
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 149
              },
              "start": {
                "column": 8,
                "line": 149
              }
            }
          },
          "range": [
            3155,
            3171
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 149
            },
            "start": {
              "column": 4,
              "line": 149
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3151,
        3172
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 149
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
            "name": "o",
            "optional": false,
            "range": [
              3177,
              3178
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 150
              },
              "start": {
                "column": 4,
                "line": 150
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    3181,
                    3182
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 150
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "9",
                  "value": 9,
                  "range": [
                    3184,
                    3185
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 150
                    },
                    "start": {
                      "column": 11,
                      "line": 150
                    }
                  }
                },
                "range": [
                  3181,
                  3185
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 150
                  },
                  "start": {
                    "column": 8,
                    "line": 150
                  }
                }
              }
            ],
            "range": [
              3180,
              3186
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 150
              },
              "start": {
                "column": 7,
                "line": 150
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
            3173,
            3176
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 150
            },
            "start": {
              "column": 0,
              "line": 150
            }
          }
        },
        "optional": false,
        "range": [
          3173,
          3187
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 150
          },
          "start": {
            "column": 0,
            "line": 150
          }
        }
      },
      "range": [
        3173,
        3188
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 150
        },
        "start": {
          "column": 0,
          "line": 150
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "range": [
            3189,
            3190
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 151
            },
            "start": {
              "column": 0,
              "line": 151
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "range": [
                3197,
                3198
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 151
                },
                "start": {
                  "column": 8,
                  "line": 151
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      3201,
                      3202
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 151
                      },
                      "start": {
                        "column": 12,
                        "line": 151
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "9",
                    "value": 9,
                    "range": [
                      3204,
                      3205
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 151
                      },
                      "start": {
                        "column": 15,
                        "line": 151
                      }
                    }
                  },
                  "range": [
                    3201,
                    3205
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 151
                    },
                    "start": {
                      "column": 12,
                      "line": 151
                    }
                  }
                }
              ],
              "range": [
                3200,
                3206
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 151
                },
                "start": {
                  "column": 11,
                  "line": 151
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
              3193,
              3196
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 151
              }
            }
          },
          "optional": false,
          "range": [
            3193,
            3207
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 151
            },
            "start": {
              "column": 4,
              "line": 151
            }
          }
        },
        "range": [
          3189,
          3207
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 151
          },
          "start": {
            "column": 0,
            "line": 151
          }
        }
      },
      "range": [
        3189,
        3208
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 151
        },
        "start": {
          "column": 0,
          "line": 151
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
        "name": "f20",
        "optional": false,
        "range": [
          3353,
          3356
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 156
          },
          "start": {
            "column": 17,
            "line": 156
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
                "column": 58,
                "line": 156
              },
              "start": {
                "column": 46,
                "line": 156
              }
            },
            "range": [
              3382,
              3394
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3388,
                  3394
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
                        3389,
                        3390
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 156
                        },
                        "start": {
                          "column": 53,
                          "line": 156
                        }
                      }
                    },
                    "range": [
                      3389,
                      3390
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 156
                      },
                      "start": {
                        "column": 53,
                        "line": 156
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3392,
                        3393
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 156
                        },
                        "start": {
                          "column": 56,
                          "line": 156
                        }
                      }
                    },
                    "range": [
                      3392,
                      3393
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 156
                      },
                      "start": {
                        "column": 56,
                        "line": 156
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 156
                  },
                  "start": {
                    "column": 52,
                    "line": 156
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  3384,
                  3388
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 156
                  },
                  "start": {
                    "column": 48,
                    "line": 156
                  }
                }
              },
              "range": [
                3384,
                3394
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 156
                },
                "start": {
                  "column": 48,
                  "line": 156
                }
              }
            }
          },
          "range": [
            3379,
            3394
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 156
            },
            "start": {
              "column": 43,
              "line": 156
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 156
          },
          "start": {
            "column": 59,
            "line": 156
          }
        },
        "range": [
          3395,
          3398
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3397,
              3398
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 156
              },
              "start": {
                "column": 61,
                "line": 156
              }
            }
          },
          "range": [
            3397,
            3398
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 156
            },
            "start": {
              "column": 61,
              "line": 156
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 156
          },
          "start": {
            "column": 20,
            "line": 156
          }
        },
        "range": [
          3356,
          3378
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
                3357,
                3358
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 156
                },
                "start": {
                  "column": 21,
                  "line": 156
                }
              }
            },
            "out": false,
            "range": [
              3357,
              3358
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 156
              },
              "start": {
                "column": 21,
                "line": 156
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
                    3376,
                    3377
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 156
                    },
                    "start": {
                      "column": 40,
                      "line": 156
                    }
                  }
                },
                "range": [
                  3376,
                  3377
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 156
                  },
                  "start": {
                    "column": 40,
                    "line": 156
                  }
                }
              },
              "range": [
                3370,
                3377
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 156
                },
                "start": {
                  "column": 34,
                  "line": 156
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
                3360,
                3361
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 156
                },
                "start": {
                  "column": 24,
                  "line": 156
                }
              }
            },
            "out": false,
            "range": [
              3360,
              3377
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 156
              },
              "start": {
                "column": 24,
                "line": 156
              }
            }
          }
        ]
      },
      "range": [
        3336,
        3399
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 156
        },
        "start": {
          "column": 0,
          "line": 156
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
        "name": "f21",
        "optional": false,
        "range": [
          3417,
          3420
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 157
          },
          "start": {
            "column": 17,
            "line": 157
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
                "column": 58,
                "line": 157
              },
              "start": {
                "column": 46,
                "line": 157
              }
            },
            "range": [
              3446,
              3458
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3452,
                  3458
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
                        3453,
                        3454
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 157
                        },
                        "start": {
                          "column": 53,
                          "line": 157
                        }
                      }
                    },
                    "range": [
                      3453,
                      3454
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 157
                      },
                      "start": {
                        "column": 53,
                        "line": 157
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3456,
                        3457
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 157
                        },
                        "start": {
                          "column": 56,
                          "line": 157
                        }
                      }
                    },
                    "range": [
                      3456,
                      3457
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 157
                      },
                      "start": {
                        "column": 56,
                        "line": 157
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 157
                  },
                  "start": {
                    "column": 52,
                    "line": 157
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  3448,
                  3452
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 157
                  },
                  "start": {
                    "column": 48,
                    "line": 157
                  }
                }
              },
              "range": [
                3448,
                3458
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 157
                },
                "start": {
                  "column": 48,
                  "line": 157
                }
              }
            }
          },
          "range": [
            3443,
            3458
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 157
            },
            "start": {
              "column": 43,
              "line": 157
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 157
          },
          "start": {
            "column": 59,
            "line": 157
          }
        },
        "range": [
          3459,
          3462
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              3461,
              3462
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 157
              },
              "start": {
                "column": 61,
                "line": 157
              }
            }
          },
          "range": [
            3461,
            3462
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 157
            },
            "start": {
              "column": 61,
              "line": 157
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 157
          },
          "start": {
            "column": 20,
            "line": 157
          }
        },
        "range": [
          3420,
          3442
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
                3421,
                3422
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 157
                },
                "start": {
                  "column": 21,
                  "line": 157
                }
              }
            },
            "out": false,
            "range": [
              3421,
              3422
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 157
              },
              "start": {
                "column": 21,
                "line": 157
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
                    3440,
                    3441
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 157
                    },
                    "start": {
                      "column": 40,
                      "line": 157
                    }
                  }
                },
                "range": [
                  3440,
                  3441
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 157
                  },
                  "start": {
                    "column": 40,
                    "line": 157
                  }
                }
              },
              "range": [
                3434,
                3441
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 157
                },
                "start": {
                  "column": 34,
                  "line": 157
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
                3424,
                3425
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 157
                },
                "start": {
                  "column": 24,
                  "line": 157
                }
              }
            },
            "out": false,
            "range": [
              3424,
              3441
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 157
              },
              "start": {
                "column": 24,
                "line": 157
              }
            }
          }
        ]
      },
      "range": [
        3400,
        3463
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 157
        },
        "start": {
          "column": 0,
          "line": 157
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
        "name": "f22",
        "optional": false,
        "range": [
          3481,
          3484
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 158
          },
          "start": {
            "column": 17,
            "line": 158
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
                "column": 68,
                "line": 158
              },
              "start": {
                "column": 46,
                "line": 158
              }
            },
            "range": [
              3510,
              3532
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3520,
                  3532
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3525,
                        3531
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
                              3526,
                              3527
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 158
                              },
                              "start": {
                                "column": 62,
                                "line": 158
                              }
                            }
                          },
                          "range": [
                            3526,
                            3527
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 158
                            },
                            "start": {
                              "column": 62,
                              "line": 158
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              3529,
                              3530
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 158
                              },
                              "start": {
                                "column": 65,
                                "line": 158
                              }
                            }
                          },
                          "range": [
                            3529,
                            3530
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 158
                            },
                            "start": {
                              "column": 65,
                              "line": 158
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 158
                        },
                        "start": {
                          "column": 61,
                          "line": 158
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        3521,
                        3525
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 158
                        },
                        "start": {
                          "column": 57,
                          "line": 158
                        }
                      }
                    },
                    "range": [
                      3521,
                      3531
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 158
                      },
                      "start": {
                        "column": 57,
                        "line": 158
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 158
                  },
                  "start": {
                    "column": 56,
                    "line": 158
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  3512,
                  3520
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 158
                  },
                  "start": {
                    "column": 48,
                    "line": 158
                  }
                }
              },
              "range": [
                3512,
                3532
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 158
                },
                "start": {
                  "column": 48,
                  "line": 158
                }
              }
            }
          },
          "range": [
            3507,
            3532
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 158
            },
            "start": {
              "column": 43,
              "line": 158
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 72,
            "line": 158
          },
          "start": {
            "column": 69,
            "line": 158
          }
        },
        "range": [
          3533,
          3536
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3535,
              3536
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 158
              },
              "start": {
                "column": 71,
                "line": 158
              }
            }
          },
          "range": [
            3535,
            3536
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 158
            },
            "start": {
              "column": 71,
              "line": 158
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 158
          },
          "start": {
            "column": 20,
            "line": 158
          }
        },
        "range": [
          3484,
          3506
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
                3485,
                3486
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 158
                },
                "start": {
                  "column": 21,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              3485,
              3486
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 158
              },
              "start": {
                "column": 21,
                "line": 158
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
                    3504,
                    3505
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 158
                    },
                    "start": {
                      "column": 40,
                      "line": 158
                    }
                  }
                },
                "range": [
                  3504,
                  3505
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 158
                  },
                  "start": {
                    "column": 40,
                    "line": 158
                  }
                }
              },
              "range": [
                3498,
                3505
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 158
                },
                "start": {
                  "column": 34,
                  "line": 158
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
                3488,
                3489
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 158
                },
                "start": {
                  "column": 24,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              3488,
              3505
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 158
              },
              "start": {
                "column": 24,
                "line": 158
              }
            }
          }
        ]
      },
      "range": [
        3464,
        3537
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 158
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
        "name": "f23",
        "optional": false,
        "range": [
          3555,
          3558
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 159
          },
          "start": {
            "column": 17,
            "line": 159
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
                "column": 71,
                "line": 159
              },
              "start": {
                "column": 59,
                "line": 159
              }
            },
            "range": [
              3597,
              3609
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3603,
                  3609
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
                        3604,
                        3605
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 159
                        },
                        "start": {
                          "column": 66,
                          "line": 159
                        }
                      }
                    },
                    "range": [
                      3604,
                      3605
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 159
                      },
                      "start": {
                        "column": 66,
                        "line": 159
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3607,
                        3608
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 159
                        },
                        "start": {
                          "column": 69,
                          "line": 159
                        }
                      }
                    },
                    "range": [
                      3607,
                      3608
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 159
                      },
                      "start": {
                        "column": 69,
                        "line": 159
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 159
                  },
                  "start": {
                    "column": 65,
                    "line": 159
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  3599,
                  3603
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 159
                  },
                  "start": {
                    "column": 61,
                    "line": 159
                  }
                }
              },
              "range": [
                3599,
                3609
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 159
                },
                "start": {
                  "column": 61,
                  "line": 159
                }
              }
            }
          },
          "range": [
            3594,
            3609
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 159
            },
            "start": {
              "column": 56,
              "line": 159
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 159
          },
          "start": {
            "column": 72,
            "line": 159
          }
        },
        "range": [
          3610,
          3613
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3612,
              3613
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 159
              },
              "start": {
                "column": 74,
                "line": 159
              }
            }
          },
          "range": [
            3612,
            3613
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 159
            },
            "start": {
              "column": 74,
              "line": 159
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 159
          },
          "start": {
            "column": 20,
            "line": 159
          }
        },
        "range": [
          3558,
          3593
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
                3559,
                3560
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 159
                },
                "start": {
                  "column": 21,
                  "line": 159
                }
              }
            },
            "out": false,
            "range": [
              3559,
              3560
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 159
              },
              "start": {
                "column": 21,
                "line": 159
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
                    3578,
                    3579
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 159
                    },
                    "start": {
                      "column": 40,
                      "line": 159
                    }
                  }
                },
                "range": [
                  3578,
                  3579
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 159
                  },
                  "start": {
                    "column": 40,
                    "line": 159
                  }
                }
              },
              "range": [
                3572,
                3579
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 159
                },
                "start": {
                  "column": 34,
                  "line": 159
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3562,
                3563
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 159
                },
                "start": {
                  "column": 24,
                  "line": 159
                }
              }
            },
            "out": false,
            "range": [
              3562,
              3579
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 159
              },
              "start": {
                "column": 24,
                "line": 159
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3591,
                  3592
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 159
                  },
                  "start": {
                    "column": 53,
                    "line": 159
                  }
                }
              },
              "range": [
                3591,
                3592
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 159
                },
                "start": {
                  "column": 53,
                  "line": 159
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
                3581,
                3582
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 159
                },
                "start": {
                  "column": 43,
                  "line": 159
                }
              }
            },
            "out": false,
            "range": [
              3581,
              3592
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 159
              },
              "start": {
                "column": 43,
                "line": 159
              }
            }
          }
        ]
      },
      "range": [
        3538,
        3614
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 159
        },
        "start": {
          "column": 0,
          "line": 159
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
        "name": "f24",
        "optional": false,
        "range": [
          3632,
          3635
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 160
          },
          "start": {
            "column": 17,
            "line": 160
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
                "column": 75,
                "line": 160
              },
              "start": {
                "column": 59,
                "line": 160
              }
            },
            "range": [
              3674,
              3690
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3680,
                  3690
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
                          "name": "T",
                          "optional": false,
                          "range": [
                            3681,
                            3682
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 160
                            },
                            "start": {
                              "column": 66,
                              "line": 160
                            }
                          }
                        },
                        "range": [
                          3681,
                          3682
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 160
                          },
                          "start": {
                            "column": 66,
                            "line": 160
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
                            3685,
                            3686
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 160
                            },
                            "start": {
                              "column": 70,
                              "line": 160
                            }
                          }
                        },
                        "range": [
                          3685,
                          3686
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 160
                          },
                          "start": {
                            "column": 70,
                            "line": 160
                          }
                        }
                      }
                    ],
                    "range": [
                      3681,
                      3686
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 160
                      },
                      "start": {
                        "column": 66,
                        "line": 160
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3688,
                        3689
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 160
                        },
                        "start": {
                          "column": 73,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      3688,
                      3689
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 160
                      },
                      "start": {
                        "column": 73,
                        "line": 160
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 160
                  },
                  "start": {
                    "column": 65,
                    "line": 160
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  3676,
                  3680
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 160
                  },
                  "start": {
                    "column": 61,
                    "line": 160
                  }
                }
              },
              "range": [
                3676,
                3690
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 160
                },
                "start": {
                  "column": 61,
                  "line": 160
                }
              }
            }
          },
          "range": [
            3671,
            3690
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 160
            },
            "start": {
              "column": 56,
              "line": 160
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 83,
            "line": 160
          },
          "start": {
            "column": 76,
            "line": 160
          }
        },
        "range": [
          3691,
          3698
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3693,
                  3694
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 160
                  },
                  "start": {
                    "column": 78,
                    "line": 160
                  }
                }
              },
              "range": [
                3693,
                3694
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 160
                },
                "start": {
                  "column": 78,
                  "line": 160
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
                  3697,
                  3698
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 160
                  },
                  "start": {
                    "column": 82,
                    "line": 160
                  }
                }
              },
              "range": [
                3697,
                3698
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 160
                },
                "start": {
                  "column": 82,
                  "line": 160
                }
              }
            }
          ],
          "range": [
            3693,
            3698
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 160
            },
            "start": {
              "column": 78,
              "line": 160
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 160
          },
          "start": {
            "column": 20,
            "line": 160
          }
        },
        "range": [
          3635,
          3670
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
                3636,
                3637
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 160
                },
                "start": {
                  "column": 21,
                  "line": 160
                }
              }
            },
            "out": false,
            "range": [
              3636,
              3637
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 160
              },
              "start": {
                "column": 21,
                "line": 160
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
                3639,
                3640
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 160
                },
                "start": {
                  "column": 24,
                  "line": 160
                }
              }
            },
            "out": false,
            "range": [
              3639,
              3640
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 160
              },
              "start": {
                "column": 24,
                "line": 160
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
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
                        3658,
                        3659
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 160
                        },
                        "start": {
                          "column": 43,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      3658,
                      3659
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 160
                      },
                      "start": {
                        "column": 43,
                        "line": 160
                      }
                    }
                  },
                  "range": [
                    3652,
                    3659
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 160
                    },
                    "start": {
                      "column": 37,
                      "line": 160
                    }
                  }
                },
                {
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
                        3668,
                        3669
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 160
                        },
                        "start": {
                          "column": 53,
                          "line": 160
                        }
                      }
                    },
                    "range": [
                      3668,
                      3669
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 160
                      },
                      "start": {
                        "column": 53,
                        "line": 160
                      }
                    }
                  },
                  "range": [
                    3662,
                    3669
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 160
                    },
                    "start": {
                      "column": 47,
                      "line": 160
                    }
                  }
                }
              ],
              "range": [
                3652,
                3669
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 160
                },
                "start": {
                  "column": 37,
                  "line": 160
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
                3642,
                3643
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 160
                },
                "start": {
                  "column": 27,
                  "line": 160
                }
              }
            },
            "out": false,
            "range": [
              3642,
              3669
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 160
              },
              "start": {
                "column": 27,
                "line": 160
              }
            }
          }
        ]
      },
      "range": [
        3615,
        3699
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 160
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
            "name": "x0",
            "optional": false,
            "range": [
              3705,
              3707
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3716,
                        3719
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 162
                        },
                        "start": {
                          "column": 15,
                          "line": 162
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        3721,
                        3723
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 162
                        },
                        "start": {
                          "column": 20,
                          "line": 162
                        }
                      }
                    },
                    "range": [
                      3716,
                      3723
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 162
                      },
                      "start": {
                        "column": 15,
                        "line": 162
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3725,
                        3728
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 162
                        },
                        "start": {
                          "column": 24,
                          "line": 162
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        3730,
                        3737
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 162
                        },
                        "start": {
                          "column": 29,
                          "line": 162
                        }
                      }
                    },
                    "range": [
                      3725,
                      3737
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 162
                      },
                      "start": {
                        "column": 24,
                        "line": 162
                      }
                    }
                  }
                ],
                "range": [
                  3714,
                  3739
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 162
                  },
                  "start": {
                    "column": 13,
                    "line": 162
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f20",
              "optional": false,
              "range": [
                3710,
                3713
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 162
                },
                "start": {
                  "column": 9,
                  "line": 162
                }
              }
            },
            "optional": false,
            "range": [
              3710,
              3740
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 162
              },
              "start": {
                "column": 9,
                "line": 162
              }
            }
          },
          "range": [
            3705,
            3740
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 162
            },
            "start": {
              "column": 4,
              "line": 162
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3701,
        3741
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 162
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
            "name": "x1",
            "optional": false,
            "range": [
              3746,
              3748
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 163
              },
              "start": {
                "column": 4,
                "line": 163
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3757,
                        3760
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 163
                        },
                        "start": {
                          "column": 15,
                          "line": 163
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        3762,
                        3764
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 163
                        },
                        "start": {
                          "column": 20,
                          "line": 163
                        }
                      }
                    },
                    "range": [
                      3757,
                      3764
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 163
                      },
                      "start": {
                        "column": 15,
                        "line": 163
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3766,
                        3769
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 163
                        },
                        "start": {
                          "column": 24,
                          "line": 163
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        3771,
                        3778
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 163
                        },
                        "start": {
                          "column": 29,
                          "line": 163
                        }
                      }
                    },
                    "range": [
                      3766,
                      3778
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 163
                      },
                      "start": {
                        "column": 24,
                        "line": 163
                      }
                    }
                  }
                ],
                "range": [
                  3755,
                  3780
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 163
                  },
                  "start": {
                    "column": 13,
                    "line": 163
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f21",
              "optional": false,
              "range": [
                3751,
                3754
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 163
                },
                "start": {
                  "column": 9,
                  "line": 163
                }
              }
            },
            "optional": false,
            "range": [
              3751,
              3781
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 163
              },
              "start": {
                "column": 9,
                "line": 163
              }
            }
          },
          "range": [
            3746,
            3781
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 163
            },
            "start": {
              "column": 4,
              "line": 163
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3742,
        3782
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 163
        },
        "start": {
          "column": 0,
          "line": 163
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
            "name": "x2",
            "optional": false,
            "range": [
              3787,
              3789
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 164
              },
              "start": {
                "column": 4,
                "line": 164
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3798,
                        3801
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 164
                        },
                        "start": {
                          "column": 15,
                          "line": 164
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              3805,
                              3810
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 164
                              },
                              "start": {
                                "column": 22,
                                "line": 164
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              3812,
                              3814
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 164
                              },
                              "start": {
                                "column": 29,
                                "line": 164
                              }
                            }
                          },
                          "range": [
                            3805,
                            3814
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 164
                            },
                            "start": {
                              "column": 22,
                              "line": 164
                            }
                          }
                        }
                      ],
                      "range": [
                        3803,
                        3815
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 164
                        },
                        "start": {
                          "column": 20,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      3798,
                      3815
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 164
                      },
                      "start": {
                        "column": 15,
                        "line": 164
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3818,
                        3821
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 164
                        },
                        "start": {
                          "column": 35,
                          "line": 164
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              3825,
                              3830
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 164
                              },
                              "start": {
                                "column": 42,
                                "line": 164
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              3832,
                              3839
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 164
                              },
                              "start": {
                                "column": 49,
                                "line": 164
                              }
                            }
                          },
                          "range": [
                            3825,
                            3839
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 164
                            },
                            "start": {
                              "column": 42,
                              "line": 164
                            }
                          }
                        }
                      ],
                      "range": [
                        3823,
                        3841
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 164
                        },
                        "start": {
                          "column": 40,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      3818,
                      3841
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 164
                      },
                      "start": {
                        "column": 35,
                        "line": 164
                      }
                    }
                  }
                ],
                "range": [
                  3796,
                  3843
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 164
                  },
                  "start": {
                    "column": 13,
                    "line": 164
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f22",
              "optional": false,
              "range": [
                3792,
                3795
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 164
                },
                "start": {
                  "column": 9,
                  "line": 164
                }
              }
            },
            "optional": false,
            "range": [
              3792,
              3844
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 164
              },
              "start": {
                "column": 9,
                "line": 164
              }
            }
          },
          "range": [
            3787,
            3844
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 164
            },
            "start": {
              "column": 4,
              "line": 164
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3783,
        3845
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 164
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
            "name": "x3",
            "optional": false,
            "range": [
              3850,
              3852
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 165
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3861,
                        3864
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 165
                        },
                        "start": {
                          "column": 15,
                          "line": 165
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        3866,
                        3868
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 165
                        },
                        "start": {
                          "column": 20,
                          "line": 165
                        }
                      }
                    },
                    "range": [
                      3861,
                      3868
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 165
                      },
                      "start": {
                        "column": 15,
                        "line": 165
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3870,
                        3873
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 165
                        },
                        "start": {
                          "column": 24,
                          "line": 165
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        3875,
                        3882
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 165
                        },
                        "start": {
                          "column": 29,
                          "line": 165
                        }
                      }
                    },
                    "range": [
                      3870,
                      3882
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 165
                      },
                      "start": {
                        "column": 24,
                        "line": 165
                      }
                    }
                  }
                ],
                "range": [
                  3859,
                  3884
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 165
                  },
                  "start": {
                    "column": 13,
                    "line": 165
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f23",
              "optional": false,
              "range": [
                3855,
                3858
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 165
                },
                "start": {
                  "column": 9,
                  "line": 165
                }
              }
            },
            "optional": false,
            "range": [
              3855,
              3885
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 165
              },
              "start": {
                "column": 9,
                "line": 165
              }
            }
          },
          "range": [
            3850,
            3885
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 165
            },
            "start": {
              "column": 4,
              "line": 165
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3846,
        3886
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 165
        },
        "start": {
          "column": 0,
          "line": 165
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
            "name": "x4",
            "optional": false,
            "range": [
              3891,
              3893
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3902,
                        3905
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 166
                        },
                        "start": {
                          "column": 15,
                          "line": 166
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        3907,
                        3909
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 166
                        },
                        "start": {
                          "column": 20,
                          "line": 166
                        }
                      }
                    },
                    "range": [
                      3902,
                      3909
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 166
                      },
                      "start": {
                        "column": 15,
                        "line": 166
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3911,
                        3914
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 166
                        },
                        "start": {
                          "column": 24,
                          "line": 166
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        3916,
                        3923
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 166
                        },
                        "start": {
                          "column": 29,
                          "line": 166
                        }
                      }
                    },
                    "range": [
                      3911,
                      3923
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 166
                      },
                      "start": {
                        "column": 24,
                        "line": 166
                      }
                    }
                  }
                ],
                "range": [
                  3900,
                  3925
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 166
                  },
                  "start": {
                    "column": 13,
                    "line": 166
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f24",
              "optional": false,
              "range": [
                3896,
                3899
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 166
                },
                "start": {
                  "column": 9,
                  "line": 166
                }
              }
            },
            "optional": false,
            "range": [
              3896,
              3926
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 166
              },
              "start": {
                "column": 9,
                "line": 166
              }
            }
          },
          "range": [
            3891,
            3926
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 166
            },
            "start": {
              "column": 4,
              "line": 166
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3887,
        3927
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 166
        },
        "start": {
          "column": 0,
          "line": 166
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
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  4035,
                  4037
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 171
                  },
                  "start": {
                    "column": 11,
                    "line": 171
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4041,
                  4044
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 171
                  },
                  "start": {
                    "column": 17,
                    "line": 171
                  }
                }
              },
              "range": [
                4035,
                4044
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 171
                },
                "start": {
                  "column": 11,
                  "line": 171
                }
              }
            },
            "range": [
              4028,
              4045
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 171
              },
              "start": {
                "column": 4,
                "line": 171
              }
            }
          }
        ],
        "range": [
          4022,
          4047
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 172
          },
          "start": {
            "column": 71,
            "line": 170
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "range": [
          3960,
          3968
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 170
          },
          "start": {
            "column": 9,
            "line": 170
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
                "column": 46,
                "line": 170
              },
              "start": {
                "column": 43,
                "line": 170
              }
            },
            "range": [
              3994,
              3997
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3996,
                  3997
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 170
                  },
                  "start": {
                    "column": 45,
                    "line": 170
                  }
                }
              },
              "range": [
                3996,
                3997
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 170
                },
                "start": {
                  "column": 45,
                  "line": 170
                }
              }
            }
          },
          "range": [
            3991,
            3997
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 170
            },
            "start": {
              "column": 40,
              "line": 170
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 170
              },
              "start": {
                "column": 52,
                "line": 170
              }
            },
            "range": [
              4003,
              4008
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    4005,
                    4006
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 170
                    },
                    "start": {
                      "column": 54,
                      "line": 170
                    }
                  }
                },
                "range": [
                  4005,
                  4006
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 170
                  },
                  "start": {
                    "column": 54,
                    "line": 170
                  }
                }
              },
              "range": [
                4005,
                4008
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 170
                },
                "start": {
                  "column": 54,
                  "line": 170
                }
              }
            }
          },
          "range": [
            3999,
            4008
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 170
            },
            "start": {
              "column": 48,
              "line": 170
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 170
          },
          "start": {
            "column": 58,
            "line": 170
          }
        },
        "range": [
          4009,
          4021
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4015,
              4021
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
                    4016,
                    4017
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 170
                    },
                    "start": {
                      "column": 65,
                      "line": 170
                    }
                  }
                },
                "range": [
                  4016,
                  4017
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 170
                  },
                  "start": {
                    "column": 65,
                    "line": 170
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    4019,
                    4020
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 170
                    },
                    "start": {
                      "column": 68,
                      "line": 170
                    }
                  }
                },
                "range": [
                  4019,
                  4020
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 170
                  },
                  "start": {
                    "column": 68,
                    "line": 170
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 170
              },
              "start": {
                "column": 64,
                "line": 170
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "range": [
              4011,
              4015
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 170
              },
              "start": {
                "column": 60,
                "line": 170
              }
            }
          },
          "range": [
            4011,
            4021
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 170
            },
            "start": {
              "column": 60,
              "line": 170
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 170
          },
          "start": {
            "column": 17,
            "line": 170
          }
        },
        "range": [
          3968,
          3990
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
                3969,
                3970
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 170
                },
                "start": {
                  "column": 18,
                  "line": 170
                }
              }
            },
            "out": false,
            "range": [
              3969,
              3970
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 170
              },
              "start": {
                "column": 18,
                "line": 170
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
                    3988,
                    3989
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 170
                    },
                    "start": {
                      "column": 37,
                      "line": 170
                    }
                  }
                },
                "range": [
                  3988,
                  3989
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 170
                  },
                  "start": {
                    "column": 37,
                    "line": 170
                  }
                }
              },
              "range": [
                3982,
                3989
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 170
                },
                "start": {
                  "column": 31,
                  "line": 170
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
                3972,
                3973
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 170
                },
                "start": {
                  "column": 21,
                  "line": 170
                }
              }
            },
            "out": false,
            "range": [
              3972,
              3989
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 170
              },
              "start": {
                "column": 21,
                "line": 170
              }
            }
          }
        ]
      },
      "range": [
        3951,
        4047
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 170
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
            "name": "myAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 174
                },
                "start": {
                  "column": 11,
                  "line": 174
                }
              },
              "range": [
                4060,
                4065
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4062,
                  4065
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 174
                  },
                  "start": {
                    "column": 13,
                    "line": 174
                  }
                }
              }
            },
            "range": [
              4055,
              4065
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 174
              },
              "start": {
                "column": 6,
                "line": 174
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              4068,
              4070
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 174
              },
              "start": {
                "column": 19,
                "line": 174
              }
            }
          },
          "range": [
            4055,
            4070
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 174
            },
            "start": {
              "column": 6,
              "line": 174
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4049,
        4071
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
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
            "name": "o1",
            "optional": false,
            "range": [
              4079,
              4081
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 176
              },
              "start": {
                "column": 6,
                "line": 176
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myAny",
                "optional": false,
                "range": [
                  4093,
                  4098
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 176
                  },
                  "start": {
                    "column": 20,
                    "line": 176
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      4101,
                      4106
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 176
                      },
                      "start": {
                        "column": 28,
                        "line": 176
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'bar'",
                    "value": "bar",
                    "range": [
                      4108,
                      4113
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 176
                      },
                      "start": {
                        "column": 35,
                        "line": 176
                      }
                    }
                  }
                ],
                "range": [
                  4100,
                  4114
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 176
                  },
                  "start": {
                    "column": 27,
                    "line": 176
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "range": [
                4084,
                4092
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 176
                },
                "start": {
                  "column": 11,
                  "line": 176
                }
              }
            },
            "optional": false,
            "range": [
              4084,
              4115
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 176
              },
              "start": {
                "column": 11,
                "line": 176
              }
            }
          },
          "range": [
            4079,
            4115
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 176
            },
            "start": {
              "column": 6,
              "line": 176
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4073,
        4116
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 176
        },
        "start": {
          "column": 0,
          "line": 176
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 178
                },
                "start": {
                  "column": 8,
                  "line": 178
                }
              },
              "range": [
                4126,
                4150
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
                        4130,
                        4133
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 178
                        },
                        "start": {
                          "column": 12,
                          "line": 178
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
                          "line": 178
                        },
                        "start": {
                          "column": 15,
                          "line": 178
                        }
                      },
                      "range": [
                        4133,
                        4138
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          4135,
                          4138
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 178
                          },
                          "start": {
                            "column": 17,
                            "line": 178
                          }
                        }
                      }
                    },
                    "range": [
                      4130,
                      4139
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 178
                      },
                      "start": {
                        "column": 12,
                        "line": 178
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        4140,
                        4143
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 178
                        },
                        "start": {
                          "column": 22,
                          "line": 178
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
                          "column": 30,
                          "line": 178
                        },
                        "start": {
                          "column": 25,
                          "line": 178
                        }
                      },
                      "range": [
                        4143,
                        4148
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          4145,
                          4148
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 178
                          },
                          "start": {
                            "column": 27,
                            "line": 178
                          }
                        }
                      }
                    },
                    "range": [
                      4140,
                      4148
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 178
                      },
                      "start": {
                        "column": 22,
                        "line": 178
                      }
                    }
                  }
                ],
                "range": [
                  4128,
                  4150
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 178
                  },
                  "start": {
                    "column": 10,
                    "line": 178
                  }
                }
              }
            },
            "range": [
              4124,
              4150
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 178
              },
              "start": {
                "column": 6,
                "line": 178
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myAny",
                "optional": false,
                "range": [
                  4162,
                  4167
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 178
                  },
                  "start": {
                    "column": 44,
                    "line": 178
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      4170,
                      4175
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 178
                      },
                      "start": {
                        "column": 52,
                        "line": 178
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'bar'",
                    "value": "bar",
                    "range": [
                      4177,
                      4182
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 178
                      },
                      "start": {
                        "column": 59,
                        "line": 178
                      }
                    }
                  }
                ],
                "range": [
                  4169,
                  4183
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 178
                  },
                  "start": {
                    "column": 51,
                    "line": 178
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "range": [
                4153,
                4161
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 178
                },
                "start": {
                  "column": 35,
                  "line": 178
                }
              }
            },
            "optional": false,
            "range": [
              4153,
              4184
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 178
              },
              "start": {
                "column": 35,
                "line": 178
              }
            }
          },
          "range": [
            4124,
            4184
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 178
            },
            "start": {
              "column": 6,
              "line": 178
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4118,
        4185
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 178
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 179
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
