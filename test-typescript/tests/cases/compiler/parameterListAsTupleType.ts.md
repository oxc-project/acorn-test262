__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    590
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                46,
                50
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              39,
              51
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          35,
          53
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 35,
            "line": 1
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
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
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
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            },
            "range": [
              14,
              22
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                16,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            },
            "range": [
              25,
              33
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                27,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            }
          },
          "range": [
            24,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        53
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
        "name": "Foops",
        "optional": false,
        "range": [
          59,
          64
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            77,
            89
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  85,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              },
              "range": [
                78,
                88
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 4
            },
            "start": {
              "column": 23,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "range": [
            67,
            77
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "range": [
          67,
          89
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        54,
        90
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "x",
            "optional": false,
            "range": [
              98,
              99
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "5",
              "value": 5,
              "range": [
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
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
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  },
                  "range": [
                    104,
                    112
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      106,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  103,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              102,
              118
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 6
              }
            }
          },
          "range": [
            98,
            118
          ],
          "loc": {
            "end": {
              "column": 26,
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
        92,
        119
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Xps",
        "optional": false,
        "range": [
          125,
          128
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            141,
            151
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                }
              },
              "range": [
                142,
                150
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 7
            },
            "start": {
              "column": 21,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "range": [
            131,
            141
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 11,
              "line": 7
            }
          }
        },
        "range": [
          131,
          151
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        }
      },
      "range": [
        120,
        152
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                160,
                165
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Xps",
                  "optional": false,
                  "range": [
                    162,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  162,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              159,
              165
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'should-not-work'",
                "value": "should-not-work",
                "range": [
                  169,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              168,
              187
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
              }
            }
          },
          "range": [
            159,
            187
          ],
          "loc": {
            "end": {
              "column": 34,
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
        153,
        188
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
          238,
          240
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 9
          },
          "start": {
            "column": 25,
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
        "name": "t",
        "optional": false,
        "range": [
          222,
          223
        ],
        "loc": {
          "end": {
            "column": 10,
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              227,
              231
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 9
              }
            },
            "range": [
              231,
              236
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Xps",
                "optional": false,
                "range": [
                  233,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "range": [
                233,
                236
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            }
          },
          "range": [
            224,
            236
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        }
      ],
      "range": [
        213,
        240
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          265,
          314
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                271,
                282
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                282,
                312
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  305,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 38,
                    "line": 12
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    },
                    "range": [
                      284,
                      292
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        286,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 19,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    283,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 12
                      },
                      "start": {
                        "column": 28,
                        "line": 12
                      }
                    },
                    "range": [
                      295,
                      303
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        297,
                        303
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 12
                        },
                        "start": {
                          "column": 30,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    294,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              271,
              312
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          263,
          264
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        257,
        314
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cps",
        "optional": false,
        "range": [
          321,
          324
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            337,
            347
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  345,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 29,
                    "line": 16
                  }
                }
              },
              "range": [
                338,
                346
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 22,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 16
            },
            "start": {
              "column": 21,
              "line": 16
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "range": [
            327,
            337
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 16
            },
            "start": {
              "column": 11,
              "line": 16
            }
          }
        },
        "range": [
          327,
          347
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 16
          }
        }
      },
      "range": [
        316,
        348
      ],
      "loc": {
        "end": {
          "column": 32,
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
        "name": "Ccps",
        "optional": false,
        "range": [
          373,
          377
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            401,
            411
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  409,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 17
                  },
                  "start": {
                    "column": 41,
                    "line": 17
                  }
                }
              },
              "range": [
                402,
                410
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 17
                },
                "start": {
                  "column": 34,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 17
            },
            "start": {
              "column": 33,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "range": [
            380,
            401
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        },
        "range": [
          380,
          411
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 17
          }
        }
      },
      "range": [
        368,
        412
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 17
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
          452,
          509
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                458,
                469
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                469,
                507
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  500,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 46,
                    "line": 20
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 17,
                        "line": 20
                      }
                    },
                    "range": [
                      471,
                      479
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        473,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 19,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    470,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "range": [
                      484,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 20
                      },
                      "start": {
                        "column": 30,
                        "line": 20
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 20
                      },
                      "start": {
                        "column": 34,
                        "line": 20
                      }
                    },
                    "range": [
                      488,
                      498
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          490,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 20
                          },
                          "start": {
                            "column": 36,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        490,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 20
                        },
                        "start": {
                          "column": 36,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    481,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 20
                    },
                    "start": {
                      "column": 27,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              458,
              507
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 8,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          450,
          451
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        444,
        509
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
        "name": "Dcps",
        "optional": false,
        "range": [
          515,
          519
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            543,
            553
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  551,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 23
                  },
                  "start": {
                    "column": 41,
                    "line": 23
                  }
                }
              },
              "range": [
                544,
                552
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 23
                },
                "start": {
                  "column": 34,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 23
            },
            "start": {
              "column": 33,
              "line": 23
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "range": [
            522,
            543
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        },
        "range": [
          522,
          553
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 23
          },
          "start": {
            "column": 12,
            "line": 23
          }
        }
      },
      "range": [
        510,
        554
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
