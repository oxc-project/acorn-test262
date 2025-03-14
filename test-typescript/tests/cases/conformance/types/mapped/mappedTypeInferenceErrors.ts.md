__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    346
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComputedOf",
        "optional": false,
        "range": [
          27,
          37
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              61,
              62
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          "range": [
            55,
            62
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 10,
              "line": 4
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            50,
            51
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 23,
                "line": 4
              }
            },
            "range": [
              68,
              75
            ],
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
                    73,
                    74
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
                  73,
                  74
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
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    71,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                },
                "range": [
                  71,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "range": [
                71,
                75
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              }
            }
          },
          "range": [
            65,
            75
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 4
            }
          }
        },
        "range": [
          43,
          78
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          37,
          40
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
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        78
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
          97,
          100
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            },
            "range": [
              114,
              171
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "range": [
                          118,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 7
                          },
                          "start": {
                            "column": 38,
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
                            "column": 46,
                            "line": 7
                          },
                          "start": {
                            "column": 43,
                            "line": 7
                          }
                        },
                        "range": [
                          123,
                          126
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              125,
                              126
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 7
                              },
                              "start": {
                                "column": 45,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            125,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 7
                            },
                            "start": {
                              "column": 45,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        118,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 7
                        },
                        "start": {
                          "column": 38,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "computed",
                        "optional": false,
                        "range": [
                          128,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 7
                          },
                          "start": {
                            "column": 48,
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
                            "column": 71,
                            "line": 7
                          },
                          "start": {
                            "column": 56,
                            "line": 7
                          }
                        },
                        "range": [
                          136,
                          151
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              148,
                              151
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "range": [
                                    149,
                                    150
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 69,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  149,
                                  150
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 7
                              },
                              "start": {
                                "column": 68,
                                "line": 7
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComputedOf",
                            "optional": false,
                            "range": [
                              138,
                              148
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 7
                              },
                              "start": {
                                "column": 58,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            138,
                            151
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 7
                            },
                            "start": {
                              "column": 58,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        128,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 7
                        },
                        "start": {
                          "column": 48,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    116,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      164,
                      171
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
                              "name": "P",
                              "optional": false,
                              "range": [
                                165,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 7
                                },
                                "start": {
                                  "column": 85,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              165,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 7
                              },
                              "start": {
                                "column": 85,
                                "line": 7
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
                                169,
                                170
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 7
                                },
                                "start": {
                                  "column": 89,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              169,
                              170
                            ],
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 7
                              },
                              "start": {
                                "column": 89,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          165,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 7
                          },
                          "start": {
                            "column": 85,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 7
                      },
                      "start": {
                        "column": 84,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "range": [
                      156,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 7
                      },
                      "start": {
                        "column": 76,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    156,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 7
                    },
                    "start": {
                      "column": 76,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                116,
                171
              ],
              "loc": {
                "end": {
                  "column": 91,
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
            107,
            171
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 7
            },
            "start": {
              "column": 27,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 98,
            "line": 7
          },
          "start": {
            "column": 92,
            "line": 7
          }
        },
        "range": [
          172,
          178
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            174,
            178
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 7
            },
            "start": {
              "column": 94,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          100,
          106
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
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
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
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
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
              "name": "C",
              "optional": false,
              "range": [
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        80,
        179
      ],
      "loc": {
        "end": {
          "column": 99,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "props",
                  "optional": false,
                  "range": [
                    191,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          200,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
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
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          203,
                          205
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 16,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        200,
                        205
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
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          207,
                          208
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
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "20",
                        "value": 20,
                        "range": [
                          210,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 10
                          },
                          "start": {
                            "column": 23,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        207,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 10
                        },
                        "start": {
                          "column": 20,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    198,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                },
                "range": [
                  191,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "range": [
                    220,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
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
                          240,
                          243
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
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
                          243,
                          318
                        ],
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
                                    "name": "z",
                                    "optional": false,
                                    "range": [
                                      272,
                                      273
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        276,
                                        280
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "range": [
                                        281,
                                        284
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      276,
                                      284
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    272,
                                    284
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "let",
                              "range": [
                                268,
                                285
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "raw": "42",
                                "value": 42,
                                "range": [
                                  305,
                                  307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                298,
                                308
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 14
                                },
                                "start": {
                                  "column": 12,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            254,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 15
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 12
                            },
                            "start": {
                              "column": 13,
                              "line": 12
                            }
                          },
                          "range": [
                            245,
                            253
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              247,
                              253
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 12
                              },
                              "start": {
                                "column": 15,
                                "line": 12
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 15
                          },
                          "start": {
                            "column": 11,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        240,
                        318
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "range": [
                          328,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
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
                          333,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        328,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    230,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "range": [
                  220,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              185,
              343
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 9
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
            181,
            184
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          181,
          344
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        181,
        345
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
