__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    40
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        39
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
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  31,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 31,
                    "line": 1
                  }
                }
              },
              "range": [
                24,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
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
            22,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 22,
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
        "range": [
          7,
          39
        ],
        "loc": {
          "end": {
            "column": 39,
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
          "column": 39,
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
      "column": 0,
      "line": 2
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
    236
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPath",
        "optional": false,
        "range": [
          17,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 26,
            "line": 1
          }
        },
        "range": [
          26,
          34
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            28,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        35
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./0\"",
        "value": "./0",
        "range": [
          58,
          63
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Zero",
            "optional": false,
            "range": [
              48,
              52
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            43,
            52
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        36,
        64
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "Literal",
          "raw": "\"./0\"",
          "value": "./0",
          "range": [
            72,
            77
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        },
        "range": [
          65,
          78
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        65,
        79
      ],
      "loc": {
        "end": {
          "column": 14,
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
        81,
        137
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
              "name": "p0",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                },
                "range": [
                  94,
                  116
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      103,
                      116
                    ],
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Zero",
                          "optional": false,
                          "range": [
                            111,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 5
                            },
                            "start": {
                              "column": 30,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          104,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      96,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    96,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                92,
                116
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "range": [
                    126,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 5
                    },
                    "start": {
                      "column": 45,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "range": [
                  126,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 5
                  },
                  "start": {
                    "column": 45,
                    "line": 5
                  }
                }
              },
              "range": [
                119,
                136
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            },
            "range": [
              92,
              136
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          88,
          137
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 56,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        138,
        190
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                },
                "range": [
                  151,
                  173
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      160,
                      173
                    ],
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Zero",
                          "optional": false,
                          "range": [
                            168,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 6
                            },
                            "start": {
                              "column": 30,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          161,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      153,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    153,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                149,
                173
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./0\"",
                "value": "./0",
                "range": [
                  183,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 6
                  }
                }
              },
              "range": [
                176,
                189
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              }
            },
            "range": [
              149,
              189
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          145,
          190
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        191,
        235
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
              "name": "p2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                },
                "range": [
                  204,
                  218
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      213,
                      218
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          214,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 7
                          },
                          "start": {
                            "column": 23,
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
                        "column": 22,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      206,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    206,
                    218
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
                }
              },
              "range": [
                202,
                218
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./0\"",
                "value": "./0",
                "range": [
                  228,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 37,
                    "line": 7
                  }
                }
              },
              "range": [
                221,
                234
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              }
            },
            "range": [
              202,
              234
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 11,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          198,
          235
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 7
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
          "column": 44,
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
