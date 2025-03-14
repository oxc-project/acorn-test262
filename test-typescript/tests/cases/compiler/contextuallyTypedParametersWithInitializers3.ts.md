__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    350
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CanvasDirection",
        "optional": false,
        "range": [
          5,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "raw": "\"RIGHT\"",
              "value": "RIGHT",
              "range": [
                23,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "range": [
              23,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"LEFT\"",
              "value": "LEFT",
              "range": [
                33,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "range": [
              33,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          }
        ],
        "range": [
          23,
          39
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "range": [
        0,
        40
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          65,
          122
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setDirection",
              "optional": false,
              "range": [
                69,
                81
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 2,
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
                  "column": 52,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                81,
                119
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      },
                      "range": [
                        93,
                        110
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CanvasDirection",
                          "optional": false,
                          "range": [
                            95,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          95,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
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
                      84,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 4
                    },
                    "start": {
                      "column": 45,
                      "line": 4
                    }
                  },
                  "range": [
                    112,
                    119
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      115,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 48,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  83,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              69,
              120
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 4
              },
              "start": {
                "column": 2,
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
            "column": 23,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GraphActions",
        "optional": false,
        "range": [
          52,
          64
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
      "range": [
        42,
        122
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
      "type": "ExportNamedDeclaration",
      "range": [
        124,
        175
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
          "name": "create",
          "optional": false,
          "range": [
            148,
            154
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
                }
              },
              "range": [
                164,
                167
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    166,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 42,
                      "line": 7
                    }
                  }
                },
                "range": [
                  166,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 42,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              158,
              167
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 50,
              "line": 7
            },
            "start": {
              "column": 44,
              "line": 7
            }
          },
          "range": [
            168,
            174
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              170,
              174
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 7
              },
              "start": {
                "column": 46,
                "line": 7
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 33,
              "line": 7
            },
            "start": {
              "column": 30,
              "line": 7
            }
          },
          "range": [
            154,
            157
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
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          131,
          175
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 51,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "takesDirection",
        "optional": false,
        "range": [
          194,
          208
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 9
              },
              "start": {
                "column": 41,
                "line": 9
              }
            },
            "range": [
              218,
              235
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CanvasDirection",
                "optional": false,
                "range": [
                  220,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 9
                  },
                  "start": {
                    "column": 43,
                    "line": 9
                  }
                }
              },
              "range": [
                220,
                235
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 9
                },
                "start": {
                  "column": 43,
                  "line": 9
                }
              }
            }
          },
          "range": [
            209,
            235
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 9
            },
            "start": {
              "column": 32,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 9
          },
          "start": {
            "column": 59,
            "line": 9
          }
        },
        "range": [
          236,
          242
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            238,
            242
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 9
            },
            "start": {
              "column": 61,
              "line": 9
            }
          }
        }
      },
      "range": [
        177,
        243
      ],
      "loc": {
        "end": {
          "column": 66,
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
                  "name": "setDirection",
                  "optional": false,
                  "range": [
                    270,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
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
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "direction",
                              "optional": false,
                              "range": [
                                330,
                                339
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 13
                                },
                                "start": {
                                  "column": 19,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "takesDirection",
                            "optional": false,
                            "range": [
                              315,
                              329
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 13
                              },
                              "start": {
                                "column": 4,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            315,
                            340
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 13
                            },
                            "start": {
                              "column": 4,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          315,
                          341
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
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
                      309,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 14
                      },
                      "start": {
                        "column": 41,
                        "line": 12
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "range": [
                          285,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 12
                          },
                          "start": {
                            "column": 17,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "\"RIGHT\"",
                        "value": "RIGHT",
                        "range": [
                          297,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 12
                          },
                          "start": {
                            "column": 29,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        285,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    284,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                "range": [
                  270,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              266,
              348
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 21,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "range": [
            245,
            251
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            251,
            265
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GraphActions",
                "optional": false,
                "range": [
                  252,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              },
              "range": [
                252,
                264
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 7,
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
              "column": 6,
              "line": 11
            }
          }
        },
        "range": [
          245,
          349
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        245,
        350
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 15
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
      "column": 3,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
