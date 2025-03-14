__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1548
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
        "members": [],
        "range": [
          14,
          17
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
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
        18
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 2
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
          25,
          33
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
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
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            51,
            58
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            46,
            47
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 5
            },
            "start": {
              "column": 5,
              "line": 5
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              64,
              70
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
                      67,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 26,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
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
                      65,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    65,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  65,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              61,
              64
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            61,
            70
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        },
        "range": [
          39,
          73
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        },
        "range": [
          33,
          36
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
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        20,
        74
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          165,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            174,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 21,
                              "line": 10
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              188,
                              191
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
                                    189,
                                    190
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  189,
                                  190
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 10
                              },
                              "start": {
                                "column": 35,
                                "line": 10
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boxified",
                            "optional": false,
                            "range": [
                              180,
                              188
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 10
                              },
                              "start": {
                                "column": 27,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            180,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 10
                            },
                            "start": {
                              "column": 27,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          174,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 10
                          },
                          "start": {
                            "column": 21,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        165,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    161,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
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
                                234,
                                240
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 12
                                },
                                "start": {
                                  "column": 12,
                                  "line": 12
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
                                241,
                                242
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 12
                                },
                                "start": {
                                  "column": 19,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              234,
                              243
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "right": {
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
                                    248,
                                    253
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 12
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "obj",
                                    "optional": false,
                                    "range": [
                                      255,
                                      258
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 12
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
                                      259,
                                      260
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    255,
                                    261
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  248,
                                  261
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 12
                                  }
                                }
                              }
                            ],
                            "range": [
                              246,
                              263
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 12
                              },
                              "start": {
                                "column": 24,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            234,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          234,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      220,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 27,
                        "line": 11
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
                            210,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 17,
                              "line": 11
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          210,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 11
                          },
                          "start": {
                            "column": 17,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      206,
                      211
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
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      215,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    201,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 11
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
                      290,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    283,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                151,
                303
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    133,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  126,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"object\"",
                "value": "object",
                "range": [
                  141,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
                  }
                }
              },
              "range": [
                126,
                149
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "range": [
              122,
              303
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  320,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  316,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 12,
                    "line": 16
                  }
                }
              },
              "range": [
                315,
                323
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              308,
              324
            ],
            "loc": {
              "end": {
                "column": 20,
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
          116,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 40,
            "line": 8
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
          85,
          91
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
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
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
              }
            },
            "range": [
              98,
              101
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  100,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "range": [
                100,
                101
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            }
          },
          "range": [
            95,
            101
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 19,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 26,
            "line": 8
          }
        },
        "range": [
          102,
          115
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              112,
              115
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
                    113,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 8
                    },
                    "start": {
                      "column": 37,
                      "line": 8
                    }
                  }
                },
                "range": [
                  113,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 37,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 8
              },
              "start": {
                "column": 36,
                "line": 8
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "range": [
              104,
              112
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 28,
                "line": 8
              }
            }
          },
          "range": [
            104,
            115
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 8
            },
            "start": {
              "column": 28,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        },
        "range": [
          91,
          94
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
                92,
                93
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
            "out": false,
            "range": [
              92,
              93
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
          }
        ]
      },
      "range": [
        76,
        326
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          333,
          334
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
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
                339,
                340
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
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
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              },
              "range": [
                340,
                348
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  342,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 19
                  },
                  "start": {
                    "column": 14,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              339,
              348
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 11,
                "line": 19
              }
            }
          }
        ],
        "range": [
          337,
          350
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "range": [
        328,
        351
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 19
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
        "name": "B",
        "optional": false,
        "range": [
          357,
          358
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
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
              "name": "b",
              "optional": false,
              "range": [
                363,
                364
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              },
              "range": [
                364,
                372
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  366,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              363,
              372
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          }
        ],
        "range": [
          361,
          374
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "range": [
        352,
        375
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          381,
          382
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
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
              "name": "c",
              "optional": false,
              "range": [
                387,
                388
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
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
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              },
              "range": [
                388,
                396
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  390,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              387,
              396
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          }
        ],
        "range": [
          385,
          398
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "range": [
        376,
        399
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    459,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 18,
                      "line": 24
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
                  452,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "range": [
                452,
                461
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              445,
              462
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          439,
          464
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 38,
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
        "name": "f1",
        "optional": false,
        "range": [
          410,
          412
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            },
            "range": [
              414,
              437
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      416,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    416,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      420,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    420,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 19,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      424,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    424,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    428,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 27,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                416,
                437
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            }
          },
          "range": [
            413,
            437
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        }
      ],
      "range": [
        401,
        464
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
        "name": "T00",
        "optional": false,
        "range": [
          471,
          474
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            484,
            495
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 27
                      },
                      "start": {
                        "column": 19,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      489,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    489,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 27
                    },
                    "start": {
                      "column": 23,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      493,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 27
                      },
                      "start": {
                        "column": 27,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    493,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 27,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                485,
                494
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 27
                },
                "start": {
                  "column": 19,
                  "line": 27
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 27
            },
            "start": {
              "column": 18,
              "line": 27
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            477,
            484
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 27
            },
            "start": {
              "column": 11,
              "line": 27
            }
          }
        },
        "range": [
          477,
          495
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 27
          },
          "start": {
            "column": 11,
            "line": 27
          }
        }
      },
      "range": [
        466,
        496
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "range": [
          502,
          505
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            516,
            546
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      517,
                      518
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 20,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    517,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 20,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      521,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 24,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    521,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      525,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 28
                      },
                      "start": {
                        "column": 28,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    525,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 28
                    },
                    "start": {
                      "column": 28,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    529,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 28
                    },
                    "start": {
                      "column": 32,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    536,
                    545
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 28
                    },
                    "start": {
                      "column": 39,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                517,
                545
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 28
            },
            "start": {
              "column": 19,
              "line": 28
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "range": [
            508,
            516
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 28
            },
            "start": {
              "column": 11,
              "line": 28
            }
          }
        },
        "range": [
          508,
          546
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 28
          },
          "start": {
            "column": 11,
            "line": 28
          }
        }
      },
      "range": [
        497,
        547
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 28
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
        "name": "T02",
        "optional": false,
        "range": [
          553,
          556
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            567,
            589
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      568,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 29
                      },
                      "start": {
                        "column": 20,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    568,
                    569
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        572,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 29
                        },
                        "start": {
                          "column": 24,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      572,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 29
                      },
                      "start": {
                        "column": 24,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    572,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 29
                    },
                    "start": {
                      "column": 24,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      578,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 29
                      },
                      "start": {
                        "column": 30,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    578,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 29
                    },
                    "start": {
                      "column": 30,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    582,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 29
                    },
                    "start": {
                      "column": 34,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                568,
                588
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 29
                },
                "start": {
                  "column": 20,
                  "line": 29
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 29
            },
            "start": {
              "column": 19,
              "line": 29
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            559,
            567
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 11,
              "line": 29
            }
          }
        },
        "range": [
          559,
          589
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 29
          },
          "start": {
            "column": 11,
            "line": 29
          }
        }
      },
      "range": [
        548,
        589
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "range": [
          595,
          598
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            609,
            662
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    610,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 30
                    },
                    "start": {
                      "column": 20,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    619,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 30
                    },
                    "start": {
                      "column": 29,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    628,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 30
                    },
                    "start": {
                      "column": 38,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    638,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 30
                    },
                    "start": {
                      "column": 48,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    645,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 30
                    },
                    "start": {
                      "column": 55,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSVoidKeyword",
                  "range": [
                    657,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 30
                    },
                    "start": {
                      "column": 67,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                610,
                661
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 30
            },
            "start": {
              "column": 19,
              "line": 30
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "range": [
            601,
            609
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 30
            },
            "start": {
              "column": 11,
              "line": 30
            }
          }
        },
        "range": [
          601,
          662
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 30
          },
          "start": {
            "column": 11,
            "line": 30
          }
        }
      },
      "range": [
        590,
        663
      ],
      "loc": {
        "end": {
          "column": 73,
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
        "name": "T04",
        "optional": false,
        "range": [
          669,
          672
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            683,
            736
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    684,
                    690
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 31
                    },
                    "start": {
                      "column": 20,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    693,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 31
                    },
                    "start": {
                      "column": 29,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    702,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 31
                    },
                    "start": {
                      "column": 38,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    712,
                    716
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 31
                    },
                    "start": {
                      "column": 48,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    719,
                    728
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 31
                    },
                    "start": {
                      "column": 55,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSVoidKeyword",
                  "range": [
                    731,
                    735
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 31
                    },
                    "start": {
                      "column": 67,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                684,
                735
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 31
            },
            "start": {
              "column": 19,
              "line": 31
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "range": [
            675,
            683
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 31
            },
            "start": {
              "column": 11,
              "line": 31
            }
          }
        },
        "range": [
          675,
          736
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 31
          },
          "start": {
            "column": 11,
            "line": 31
          }
        }
      },
      "range": [
        664,
        737
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 31
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
        "name": "T05",
        "optional": false,
        "range": [
          743,
          746
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            756,
            780
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      757,
                      764
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 32
                      },
                      "start": {
                        "column": 19,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    757,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 19,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"world\"",
                    "value": "world",
                    "range": [
                      767,
                      774
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 32
                      },
                      "start": {
                        "column": 29,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    767,
                    774
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 32
                    },
                    "start": {
                      "column": 29,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      777,
                      779
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 32
                      },
                      "start": {
                        "column": 39,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    777,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 32
                    },
                    "start": {
                      "column": 39,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                757,
                779
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 32
                },
                "start": {
                  "column": 19,
                  "line": 32
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 32
            },
            "start": {
              "column": 18,
              "line": 32
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "range": [
            749,
            756
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 32
            },
            "start": {
              "column": 11,
              "line": 32
            }
          }
        },
        "range": [
          749,
          780
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 32
          },
          "start": {
            "column": 11,
            "line": 32
          }
        }
      },
      "range": [
        738,
        781
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxifiedWithSentinel",
        "optional": false,
        "range": [
          788,
          808
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
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
                835,
                836
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 35
                },
                "start": {
                  "column": 16,
                  "line": 35
                }
              }
            },
            "range": [
              835,
              836
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 35
              },
              "start": {
                "column": 16,
                "line": 35
              }
            }
          },
          "range": [
            829,
            836
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 35
            },
            "start": {
              "column": 10,
              "line": 35
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            824,
            825
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 35
            },
            "start": {
              "column": 5,
              "line": 35
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
                  842,
                  848
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
                          845,
                          846
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 35
                          },
                          "start": {
                            "column": 26,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        845,
                        846
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 35
                        },
                        "start": {
                          "column": 26,
                          "line": 35
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
                          843,
                          844
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 35
                          },
                          "start": {
                            "column": 24,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        843,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 35
                        },
                        "start": {
                          "column": 24,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      843,
                      847
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 35
                      },
                      "start": {
                        "column": 24,
                        "line": 35
                      }
                    }
                  }
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
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "range": [
                  839,
                  842
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 35
                  },
                  "start": {
                    "column": 20,
                    "line": 35
                  }
                }
              },
              "range": [
                839,
                848
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 35
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
                  851,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 35
                  },
                  "start": {
                    "column": 32,
                    "line": 35
                  }
                }
              },
              "range": [
                851,
                852
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 35
                },
                "start": {
                  "column": 32,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            839,
            852
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 35
            },
            "start": {
              "column": 20,
              "line": 35
            }
          }
        },
        "range": [
          817,
          855
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 34,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 34
          },
          "start": {
            "column": 25,
            "line": 34
          }
        },
        "range": [
          808,
          814
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
                809,
                810
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 34
                },
                "start": {
                  "column": 26,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              809,
              810
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 34
              },
              "start": {
                "column": 26,
                "line": 34
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
                812,
                813
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 34
                },
                "start": {
                  "column": 29,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              812,
              813
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 34
              },
              "start": {
                "column": 29,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        783,
        855
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
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
        "name": "T10",
        "optional": false,
        "range": [
          862,
          865
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            888,
            905
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      889,
                      890
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
                    889,
                    890
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
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      893,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 38
                      },
                      "start": {
                        "column": 36,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    893,
                    894
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 38
                    },
                    "start": {
                      "column": 36,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      897,
                      898
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 38
                      },
                      "start": {
                        "column": 40,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    897,
                    898
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 38
                    },
                    "start": {
                      "column": 40,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                889,
                898
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 38
                },
                "start": {
                  "column": 32,
                  "line": 38
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                900,
                904
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 38
                },
                "start": {
                  "column": 43,
                  "line": 38
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 38
            },
            "start": {
              "column": 31,
              "line": 38
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "range": [
            868,
            888
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 38
            },
            "start": {
              "column": 11,
              "line": 38
            }
          }
        },
        "range": [
          868,
          905
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 38
          },
          "start": {
            "column": 11,
            "line": 38
          }
        }
      },
      "range": [
        857,
        906
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "range": [
          912,
          915
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            938,
            960
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      939,
                      940
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 39
                      },
                      "start": {
                        "column": 32,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    939,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 39
                    },
                    "start": {
                      "column": 32,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      943,
                      944
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 39
                      },
                      "start": {
                        "column": 36,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    943,
                    944
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 39
                    },
                    "start": {
                      "column": 36,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      947,
                      948
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 39
                      },
                      "start": {
                        "column": 40,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    947,
                    948
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 39
                    },
                    "start": {
                      "column": 40,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                939,
                948
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 39
                },
                "start": {
                  "column": 32,
                  "line": 39
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                950,
                959
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 39
                },
                "start": {
                  "column": 43,
                  "line": 39
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 39
            },
            "start": {
              "column": 31,
              "line": 39
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "range": [
            918,
            938
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 39
            },
            "start": {
              "column": 11,
              "line": 39
            }
          }
        },
        "range": [
          918,
          960
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 39
          },
          "start": {
            "column": 11,
            "line": 39
          }
        }
      },
      "range": [
        907,
        961
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "range": [
          967,
          970
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            993,
            1012
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                994,
                1000
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 40
                },
                "start": {
                  "column": 32,
                  "line": 40
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                1002,
                1011
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 40
                },
                "start": {
                  "column": 40,
                  "line": 40
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 40
            },
            "start": {
              "column": 31,
              "line": 40
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "range": [
            973,
            993
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 40
            },
            "start": {
              "column": 11,
              "line": 40
            }
          }
        },
        "range": [
          973,
          1012
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 40
          },
          "start": {
            "column": 11,
            "line": 40
          }
        }
      },
      "range": [
        962,
        1013
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonly",
        "optional": false,
        "range": [
          1020,
          1032
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
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
                1065,
                1066
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 43
                },
                "start": {
                  "column": 25,
                  "line": 43
                }
              }
            },
            "range": [
              1065,
              1066
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 43
              },
              "start": {
                "column": 25,
                "line": 43
              }
            }
          },
          "range": [
            1059,
            1066
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 43
            },
            "start": {
              "column": 19,
              "line": 43
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1054,
            1055
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 43
            },
            "start": {
              "column": 14,
              "line": 43
            }
          }
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1081,
              1087
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
                      1084,
                      1085
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 43
                      },
                      "start": {
                        "column": 44,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1084,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 43
                    },
                    "start": {
                      "column": 44,
                      "line": 43
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
                      1082,
                      1083
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 43
                      },
                      "start": {
                        "column": 42,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1082,
                    1083
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 43
                    },
                    "start": {
                      "column": 42,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1082,
                  1086
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 43
                  },
                  "start": {
                    "column": 42,
                    "line": 43
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 43
              },
              "start": {
                "column": 41,
                "line": 43
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false,
            "range": [
              1069,
              1081
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 43
              },
              "start": {
                "column": 29,
                "line": 43
              }
            }
          },
          "range": [
            1069,
            1087
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 43
            },
            "start": {
              "column": 29,
              "line": 43
            }
          }
        },
        "range": [
          1038,
          1090
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 23,
            "line": 42
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 42
          },
          "start": {
            "column": 17,
            "line": 42
          }
        },
        "range": [
          1032,
          1035
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
                1033,
                1034
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 42
                },
                "start": {
                  "column": 18,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1033,
              1034
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 42
              },
              "start": {
                "column": 18,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        1015,
        1091
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 42
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
          1098,
          1101
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 46
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
                1110,
                1111
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
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
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 5,
                  "line": 47
                }
              },
              "range": [
                1111,
                1119
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1113,
                  1119
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 47
                  },
                  "start": {
                    "column": 7,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1110,
              1120
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                1125,
                1126
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
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
                  "column": 31,
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 48
                }
              },
              "range": [
                1126,
                1152
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
                        1130,
                        1131
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 48
                        },
                        "start": {
                          "column": 9,
                          "line": 48
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
                          "line": 48
                        },
                        "start": {
                          "column": 10,
                          "line": 48
                        }
                      },
                      "range": [
                        1131,
                        1139
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1133,
                          1139
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    },
                    "range": [
                      1130,
                      1140
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 48
                      },
                      "start": {
                        "column": 9,
                        "line": 48
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
                        1141,
                        1142
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 48
                        },
                        "start": {
                          "column": 20,
                          "line": 48
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
                          "line": 48
                        },
                        "start": {
                          "column": 21,
                          "line": 48
                        }
                      },
                      "range": [
                        1142,
                        1150
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1144,
                          1150
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
                      }
                    },
                    "range": [
                      1141,
                      1150
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 48
                      },
                      "start": {
                        "column": 20,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  1128,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 48
                  },
                  "start": {
                    "column": 7,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1125,
              1153
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                1158,
                1159
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
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
                  "column": 14,
                  "line": 49
                },
                "start": {
                  "column": 5,
                  "line": 49
                }
              },
              "range": [
                1159,
                1168
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1161,
                  1168
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 49
                  },
                  "start": {
                    "column": 7,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1158,
              1169
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1104,
          1171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 11,
            "line": 46
          }
        }
      },
      "range": [
        1093,
        1172
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonlyFoo",
        "optional": false,
        "range": [
          1179,
          1194
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
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
                1212,
                1213
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 13,
                  "line": 53
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
                  "line": 53
                },
                "start": {
                  "column": 14,
                  "line": 53
                }
              },
              "range": [
                1213,
                1221
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1215,
                  1221
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 53
                  },
                  "start": {
                    "column": 16,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1203,
              1222
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                1236,
                1237
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 54
                },
                "start": {
                  "column": 13,
                  "line": 54
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
                  "column": 58,
                  "line": 54
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              },
              "range": [
                1237,
                1281
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
                        1250,
                        1251
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 54
                        },
                        "start": {
                          "column": 27,
                          "line": 54
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
                          "column": 36,
                          "line": 54
                        },
                        "start": {
                          "column": 28,
                          "line": 54
                        }
                      },
                      "range": [
                        1251,
                        1259
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1253,
                          1259
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 54
                          },
                          "start": {
                            "column": 30,
                            "line": 54
                          }
                        }
                      }
                    },
                    "range": [
                      1241,
                      1260
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 54
                      },
                      "start": {
                        "column": 18,
                        "line": 54
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
                        1270,
                        1271
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 54
                        },
                        "start": {
                          "column": 47,
                          "line": 54
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
                          "column": 56,
                          "line": 54
                        },
                        "start": {
                          "column": 48,
                          "line": 54
                        }
                      },
                      "range": [
                        1271,
                        1279
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1273,
                          1279
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 54
                          },
                          "start": {
                            "column": 50,
                            "line": 54
                          }
                        }
                      }
                    },
                    "range": [
                      1261,
                      1279
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 54
                      },
                      "start": {
                        "column": 38,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  1239,
                  1281
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 54
                  },
                  "start": {
                    "column": 16,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1227,
              1282
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                1296,
                1297
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 55
                },
                "start": {
                  "column": 13,
                  "line": 55
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
                  "column": 23,
                  "line": 55
                },
                "start": {
                  "column": 14,
                  "line": 55
                }
              },
              "range": [
                1297,
                1306
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1299,
                  1306
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 55
                  },
                  "start": {
                    "column": 16,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1287,
              1307
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
          }
        ],
        "range": [
          1197,
          1309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 23,
            "line": 52
          }
        }
      },
      "range": [
        1174,
        1310
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 56
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 58
                },
                "start": {
                  "column": 6,
                  "line": 58
                }
              },
              "range": [
                1318,
                1337
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1332,
                    1337
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          1333,
                          1336
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 58
                          },
                          "start": {
                            "column": 21,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1333,
                        1336
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 58
                        },
                        "start": {
                          "column": 21,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 58
                    },
                    "start": {
                      "column": 20,
                      "line": 58
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeepReadonly",
                  "optional": false,
                  "range": [
                    1320,
                    1332
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1320,
                  1337
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              1316,
              1337
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          "init": null,
          "range": [
            1316,
            1337
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 58
            },
            "start": {
              "column": 4,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1312,
        1338
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 59
                },
                "start": {
                  "column": 6,
                  "line": 59
                }
              },
              "range": [
                1345,
                1362
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeepReadonlyFoo",
                  "optional": false,
                  "range": [
                    1347,
                    1362
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1347,
                  1362
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1343,
              1362
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "init": null,
          "range": [
            1343,
            1362
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1339,
        1363
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          1392,
          1393
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 63
          },
          "start": {
            "column": 5,
            "line": 63
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
                1398,
                1399
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 63
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
                  "line": 63
                },
                "start": {
                  "column": 12,
                  "line": 63
                }
              },
              "range": [
                1399,
                1407
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1401,
                  1407
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 63
                  },
                  "start": {
                    "column": 14,
                    "line": 63
                  }
                }
              }
            },
            "range": [
              1398,
              1407
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
          }
        ],
        "range": [
          1396,
          1409
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
          }
        }
      },
      "range": [
        1387,
        1410
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 63
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
        "name": "Clone",
        "optional": false,
        "range": [
          1416,
          1421
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 64
          },
          "start": {
            "column": 5,
            "line": 64
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
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
                    1444,
                    1445
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 65
                    },
                    "start": {
                      "column": 15,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1444,
                  1445
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 65
                  },
                  "start": {
                    "column": 15,
                    "line": 65
                  }
                }
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1448,
                  1450
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 65
                  },
                  "start": {
                    "column": 19,
                    "line": 65
                  }
                }
              }
            ],
            "range": [
              1444,
              1450
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 65
              },
              "start": {
                "column": 15,
                "line": 65
              }
            }
          },
          "range": [
            1437,
            1451
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 65
            },
            "start": {
              "column": 8,
              "line": 65
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1432,
            1433
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 65
            },
            "start": {
              "column": 3,
              "line": 65
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
              "name": "P",
              "optional": false,
              "range": [
                1463,
                1464
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 65
                },
                "start": {
                  "column": 34,
                  "line": 65
                }
              }
            },
            "range": [
              1463,
              1464
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 65
              },
              "start": {
                "column": 34,
                "line": 65
              }
            }
          },
          "objectType": {
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
                    1455,
                    1456
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 65
                    },
                    "start": {
                      "column": 26,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1455,
                  1456
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 65
                  },
                  "start": {
                    "column": 26,
                    "line": 65
                  }
                }
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1459,
                  1461
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 65
                  },
                  "start": {
                    "column": 30,
                    "line": 65
                  }
                }
              }
            ],
            "range": [
              1455,
              1461
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 65
              },
              "start": {
                "column": 26,
                "line": 65
              }
            }
          },
          "range": [
            1454,
            1465
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 65
            },
            "start": {
              "column": 25,
              "line": 65
            }
          }
        },
        "range": [
          1427,
          1468
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 16,
            "line": 64
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 64
          },
          "start": {
            "column": 10,
            "line": 64
          }
        },
        "range": [
          1421,
          1424
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
                1422,
                1423
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 64
                },
                "start": {
                  "column": 11,
                  "line": 64
                }
              }
            },
            "out": false,
            "range": [
              1422,
              1423
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 64
              },
              "start": {
                "column": 11,
                "line": 64
              }
            }
          }
        ]
      },
      "range": [
        1411,
        1469
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 66
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
        "name": "M",
        "optional": false,
        "range": [
          1475,
          1476
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 67
          },
          "start": {
            "column": 5,
            "line": 67
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1484,
            1487
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "range": [
                  1485,
                  1486
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 67
                  },
                  "start": {
                    "column": 15,
                    "line": 67
                  }
                }
              },
              "range": [
                1485,
                1486
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 67
                },
                "start": {
                  "column": 15,
                  "line": 67
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 67
            },
            "start": {
              "column": 14,
              "line": 67
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "range": [
            1479,
            1484
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 67
            },
            "start": {
              "column": 9,
              "line": 67
            }
          }
        },
        "range": [
          1479,
          1487
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 67
          },
          "start": {
            "column": 9,
            "line": 67
          }
        }
      },
      "range": [
        1470,
        1488
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 69
                },
                "start": {
                  "column": 6,
                  "line": 69
                }
              },
              "range": [
                1525,
                1528
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "range": [
                    1527,
                    1528
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
                "range": [
                  1527,
                  1528
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
              }
            },
            "range": [
              1523,
              1528
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          "init": null,
          "range": [
            1523,
            1528
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 69
            },
            "start": {
              "column": 4,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1519,
        1529
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 70
                },
                "start": {
                  "column": 6,
                  "line": 70
                }
              },
              "range": [
                1536,
                1546
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1543,
                    1546
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "range": [
                          1544,
                          1545
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 70
                          },
                          "start": {
                            "column": 14,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1544,
                        1545
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 70
                        },
                        "start": {
                          "column": 14,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 70
                    },
                    "start": {
                      "column": 13,
                      "line": 70
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Clone",
                  "optional": false,
                  "range": [
                    1538,
                    1543
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1538,
                  1546
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              }
            },
            "range": [
              1534,
              1546
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          },
          "init": null,
          "range": [
            1534,
            1546
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 70
            },
            "start": {
              "column": 4,
              "line": 70
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1530,
        1547
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
