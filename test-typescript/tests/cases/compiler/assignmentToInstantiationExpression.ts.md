__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    185
  ],
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                28
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
                      "name": "fn",
                      "optional": false,
                      "range": [
                        11,
                        13
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 1
                        },
                        "start": {
                          "column": 11,
                          "line": 1
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
                          "column": 26,
                          "line": 1
                        },
                        "start": {
                          "column": 14,
                          "line": 1
                        }
                      },
                      "range": [
                        14,
                        26
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 1
                            },
                            "start": {
                              "column": 22,
                              "line": 1
                            }
                          },
                          "range": [
                            22,
                            26
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                25,
                                26
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 1
                                },
                                "start": {
                                  "column": 25,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              25,
                              26
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 1
                              },
                              "start": {
                                "column": 25,
                                "line": 1
                              }
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 1
                            },
                            "start": {
                              "column": 16,
                              "line": 1
                            }
                          },
                          "range": [
                            16,
                            19
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
                                  17,
                                  18
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 1
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                17,
                                18
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 1
                                },
                                "start": {
                                  "column": 17,
                                  "line": 1
                                }
                              }
                            }
                          ]
                        },
                        "range": [
                          16,
                          26
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
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
                      11,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 11,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  9,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              31,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            }
          },
          "range": [
            4,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                35,
                38
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 2
                },
                "start": {
                  "column": 0,
                  "line": 2
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "range": [
                39,
                41
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              35,
              41
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              41,
              49
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  42,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "range": [
            35,
            49
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "1234",
            "value": 1234,
            "range": [
              58,
              62
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            52,
            62
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          35,
          62
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        35,
        63
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "getValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              },
              "range": [
                78,
                90
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  },
                  "range": [
                    86,
                    90
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        89,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      89,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  },
                  "range": [
                    80,
                    83
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
                          81,
                          82
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        81,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    }
                  ]
                },
                "range": [
                  80,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              70,
              90
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            70,
            90
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        66,
        91
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue",
            "optional": false,
            "range": [
              92,
              100
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              100,
              108
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  101,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            92,
            108
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "1234",
            "value": 1234,
            "range": [
              117,
              121
            ],
            "loc": {
              "end": {
                "column": 29,
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
          "params": [],
          "range": [
            111,
            121
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 19,
              "line": 6
            }
          }
        },
        "range": [
          92,
          121
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        92,
        122
      ],
      "loc": {
        "end": {
          "column": 30,
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
          "definite": true,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              },
              "range": [
                139,
                151
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  },
                  "range": [
                    147,
                    151
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        150,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 25,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      150,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  },
                  "range": [
                    141,
                    144
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
                          142,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 9
                          },
                          "start": {
                            "column": 17,
                            "line": 9
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        142,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    }
                  ]
                },
                "range": [
                  141,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              129,
              151
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            129,
            151
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        125,
        152
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "getValue2",
            "optional": false,
            "range": [
              153,
              162
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              162,
              170
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  163,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            153,
            170
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "1234",
            "value": 1234,
            "range": [
              179,
              183
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 10
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            173,
            183
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 20,
              "line": 10
            }
          }
        },
        "range": [
          153,
          183
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        153,
        184
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
