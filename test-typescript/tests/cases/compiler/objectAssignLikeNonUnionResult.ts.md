__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    566
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          20,
          42
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "range": [
                26,
                31
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
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                31,
                39
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  33,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              26,
              40
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 1
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
          10,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        42
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              },
              "range": [
                61,
                72
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Interface",
                  "optional": false,
                  "range": [
                    63,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                },
                "range": [
                  63,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              49,
              72
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
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
                  "name": "field",
                  "optional": false,
                  "range": [
                    77,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    84,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 41,
                      "line": 4
                    }
                  }
                },
                "range": [
                  77,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              75,
              87
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          "range": [
            49,
            87
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        43,
        88
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
        "name": "assign",
        "optional": false,
        "range": [
          107,
          113
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
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
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 36,
                "line": 6
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
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              },
              "range": [
                128,
                129
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              }
            }
          },
          "range": [
            120,
            129
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 6
              },
              "start": {
                "column": 47,
                "line": 6
              }
            },
            "range": [
              137,
              140
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 6
                  },
                  "start": {
                    "column": 49,
                    "line": 6
                  }
                }
              },
              "range": [
                139,
                140
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 6
                },
                "start": {
                  "column": 49,
                  "line": 6
                }
              }
            }
          },
          "range": [
            131,
            140
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 6
            },
            "start": {
              "column": 41,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 6
          },
          "start": {
            "column": 51,
            "line": 6
          }
        },
        "range": [
          141,
          148
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
                  143,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 6
                  },
                  "start": {
                    "column": 53,
                    "line": 6
                  }
                }
              },
              "range": [
                143,
                144
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 53,
                  "line": 6
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
                  147,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 6
                  },
                  "start": {
                    "column": 57,
                    "line": 6
                  }
                }
              },
              "range": [
                147,
                148
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 6
                },
                "start": {
                  "column": 57,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            143,
            148
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 6
            },
            "start": {
              "column": 53,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 6
          }
        },
        "range": [
          113,
          119
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
                114,
                115
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
            "out": false,
            "range": [
              114,
              115
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
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        90,
        149
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "data1",
            "optional": false,
            "range": [
              244,
              249
            ],
            "loc": {
              "end": {
                "column": 11,
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
                "type": "Identifier",
                "decorators": [],
                "name": "defaultValue",
                "optional": false,
                "range": [
                  259,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              },
              {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    305,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 10
                    },
                    "start": {
                      "column": 67,
                      "line": 10
                    }
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "field",
                        "optional": false,
                        "range": [
                          292,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 10
                          },
                          "start": {
                            "column": 54,
                            "line": 10
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          299,
                          300
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 10
                          },
                          "start": {
                            "column": 61,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        292,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 10
                        },
                        "start": {
                          "column": 54,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    290,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 10
                    },
                    "start": {
                      "column": 52,
                      "line": 10
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          273,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 10
                          },
                          "start": {
                            "column": 35,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "now",
                        "optional": false,
                        "range": [
                          278,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 10
                          },
                          "start": {
                            "column": 40,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        273,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 35,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      273,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      286,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 10
                      },
                      "start": {
                        "column": 48,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    273,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                "range": [
                  273,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "assign",
              "optional": false,
              "range": [
                252,
                258
              ],
              "loc": {
                "end": {
                  "column": 20,
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
              252,
              308
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            }
          },
          "range": [
            244,
            308
          ],
          "loc": {
            "end": {
              "column": 70,
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
        238,
        309
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractRawComponent",
        "optional": false,
        "range": [
          316,
          335
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
              341,
              342
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 30,
                "line": 12
              }
            }
          },
          "range": [
            341,
            342
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 12
            },
            "start": {
              "column": 30,
              "line": 12
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
                "name": "__raw",
                "optional": false,
                "range": [
                  353,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 42,
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
                    "column": 56,
                    "line": 12
                  },
                  "start": {
                    "column": 47,
                    "line": 12
                  }
                },
                "range": [
                  358,
                  367
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
                        366,
                        367
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 12
                        },
                        "start": {
                          "column": 55,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      366,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 12
                      },
                      "start": {
                        "column": 55,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    360,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 12
                    },
                    "start": {
                      "column": 49,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                353,
                367
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 12
                },
                "start": {
                  "column": 42,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            351,
            369
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 12
            },
            "start": {
              "column": 40,
              "line": 12
            }
          }
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    394,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 12
                    },
                    "start": {
                      "column": 83,
                      "line": 12
                    }
                  }
                },
                "range": [
                  394,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 12
                  },
                  "start": {
                    "column": 83,
                    "line": 12
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "R1",
                "optional": false,
                "range": [
                  390,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 12
                  },
                  "start": {
                    "column": 79,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                390,
                395
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 12
                },
                "start": {
                  "column": 79,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            389,
            396
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 12
            },
            "start": {
              "column": 78,
              "line": 12
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    377,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 12
                    },
                    "start": {
                      "column": 66,
                      "line": 12
                    }
                  }
                },
                "range": [
                  377,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 12
                  },
                  "start": {
                    "column": 66,
                    "line": 12
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "L1",
                "optional": false,
                "range": [
                  373,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 12
                  },
                  "start": {
                    "column": 62,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                373,
                378
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 12
                },
                "start": {
                  "column": 62,
                  "line": 12
                }
              }
            },
            {
              "type": "TSNamedTupleMember",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    384,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 12
                    },
                    "start": {
                      "column": 73,
                      "line": 12
                    }
                  }
                },
                "range": [
                  384,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 12
                  },
                  "start": {
                    "column": 73,
                    "line": 12
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "L2",
                "optional": false,
                "range": [
                  380,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 12
                  },
                  "start": {
                    "column": 69,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                380,
                385
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 12
                },
                "start": {
                  "column": 69,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            372,
            386
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 12
            },
            "start": {
              "column": 61,
              "line": 12
            }
          }
        },
        "range": [
          341,
          396
        ],
        "loc": {
          "end": {
            "column": 85,
            "line": 12
          },
          "start": {
            "column": 30,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 12
          },
          "start": {
            "column": 24,
            "line": 12
          }
        },
        "range": [
          335,
          338
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
                336,
                337
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              336,
              337
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        311,
        397
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "range": [
          403,
          405
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            427,
            441
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "data1",
                "optional": false,
                "range": [
                  435,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 13
                  },
                  "start": {
                    "column": 37,
                    "line": 13
                  }
                }
              },
              "range": [
                428,
                440
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 30,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 13
            },
            "start": {
              "column": 29,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtractRawComponent",
          "optional": false,
          "range": [
            408,
            427
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 13
            },
            "start": {
              "column": 10,
              "line": 13
            }
          }
        },
        "range": [
          408,
          441
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        398,
        442
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explode",
        "optional": false,
        "range": [
          456,
          463
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
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
              469,
              470
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
            469,
            470
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
        "extendsType": {
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
                  481,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 16
                  },
                  "start": {
                    "column": 30,
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
                    "column": 40,
                    "line": 16
                  },
                  "start": {
                    "column": 31,
                    "line": 16
                  }
                },
                "range": [
                  482,
                  491
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
                      "name": "A",
                      "optional": false,
                      "range": [
                        490,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 16
                        },
                        "start": {
                          "column": 39,
                          "line": 16
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      490,
                      491
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 16
                      },
                      "start": {
                        "column": 39,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    484,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 16
                    },
                    "start": {
                      "column": 33,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                481,
                491
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            479,
            493
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 16
            },
            "start": {
              "column": 28,
              "line": 16
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "'X'",
            "value": "X",
            "range": [
              502,
              505
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 16
              },
              "start": {
                "column": 51,
                "line": 16
              }
            }
          },
          "range": [
            502,
            505
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 16
            },
            "start": {
              "column": 51,
              "line": 16
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  497,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 16
                  },
                  "start": {
                    "column": 46,
                    "line": 16
                  }
                }
              },
              "range": [
                497,
                498
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 16
                },
                "start": {
                  "column": 46,
                  "line": 16
                }
              }
            }
          ],
          "range": [
            496,
            499
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 16
            },
            "start": {
              "column": 45,
              "line": 16
            }
          }
        },
        "range": [
          469,
          505
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 16
          },
          "start": {
            "column": 18,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 16
          },
          "start": {
            "column": 12,
            "line": 16
          }
        },
        "range": [
          463,
          466
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
                464,
                465
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
            "out": false,
            "range": [
              464,
              465
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
          }
        ]
      },
      "range": [
        451,
        506
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "range": [
          539,
          541
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            551,
            565
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "data1",
                "optional": false,
                "range": [
                  559,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 25,
                    "line": 18
                  }
                }
              },
              "range": [
                552,
                564
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 18
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Explode",
          "optional": false,
          "range": [
            544,
            551
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 18
            },
            "start": {
              "column": 10,
              "line": 18
            }
          }
        },
        "range": [
          544,
          565
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        534,
        566
      ],
      "loc": {
        "end": {
          "column": 32,
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
      "column": 32,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
