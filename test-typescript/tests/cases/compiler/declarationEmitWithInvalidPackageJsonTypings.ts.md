__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    30
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        30
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            16,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          },
          "range": [
            21,
            29
          ],
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              23,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 30,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    269
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        56
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            37,
            56
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "current",
                "optional": false,
                "range": [
                  43,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 11,
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
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                },
                "range": [
                  50,
                  53
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      52,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    52,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                43,
                54
              ],
              "loc": {
                "end": {
                  "column": 15,
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
              "column": 37,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MutableRefObject",
          "optional": false,
          "range": [
            17,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
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
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
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
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          56
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        57,
        143
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "range": [
                        131,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "range": [
                        131,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      131,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  129,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                122,
                141
              ],
              "loc": {
                "end": {
                  "column": 23,
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
            116,
            143
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 59,
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
          "name": "useRef",
          "optional": false,
          "range": [
            73,
            79
          ],
          "loc": {
            "end": {
              "column": 22,
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
            "name": "current",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              },
              "range": [
                90,
                93
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
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
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 35,
                      "line": 4
                    }
                  }
                },
                "range": [
                  92,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              83,
              93
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 58,
              "line": 4
            },
            "start": {
              "column": 37,
              "line": 4
            }
          },
          "range": [
            94,
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
                        "column": 57,
                        "line": 4
                      },
                      "start": {
                        "column": 56,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    113,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 4
                    },
                    "start": {
                      "column": 56,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 4
                },
                "start": {
                  "column": 55,
                  "line": 4
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MutableRefObject",
              "optional": false,
              "range": [
                96,
                112
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 4
                },
                "start": {
                  "column": 39,
                  "line": 4
                }
              }
            },
            "range": [
              96,
              115
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 4
              },
              "start": {
                "column": 39,
                "line": 4
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 22,
              "line": 4
            }
          },
          "range": [
            79,
            82
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
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          64,
          143
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
        144,
        268
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
              "name": "useCsvParser",
              "optional": false,
              "range": [
                157,
                169
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parserRef",
                          "optional": false,
                          "range": [
                            190,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 10,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                237,
                                241
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 8
                                },
                                "start": {
                                  "column": 57,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "useRef",
                            "optional": false,
                            "range": [
                              202,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 8
                              },
                              "start": {
                                "column": 22,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              208,
                              236
                            ],
                            "params": [
                              {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSImportType",
                                  "range": [
                                    216,
                                    235
                                  ],
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "raw": "\"csv-parse\"",
                                      "value": "csv-parse",
                                      "range": [
                                        223,
                                        234
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      223,
                                      234
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "options": null,
                                  "qualifier": null,
                                  "typeArguments": null,
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  209,
                                  235
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 8
                              },
                              "start": {
                                "column": 28,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            202,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 8
                            },
                            "start": {
                              "column": 22,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          190,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      184,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parserRef",
                      "optional": false,
                      "range": [
                        255,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      248,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  178,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 7
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                172,
                267
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "range": [
              157,
              267
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          151,
          268
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
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
