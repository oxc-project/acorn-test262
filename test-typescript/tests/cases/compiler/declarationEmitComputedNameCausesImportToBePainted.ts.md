__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    74
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        28
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
              "name": "Key",
              "optional": false,
              "range": [
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  19,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "range": [
                19,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
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
          "column": 28,
          "line": 1
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
        29,
        74
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            54,
            74
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "range": [
                  59,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 3,
                    "line": 3
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
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                },
                "range": [
                  63,
                  71
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    65,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                58,
                72
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 25,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Context",
          "optional": false,
          "range": [
            46,
            53
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          36,
          74
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 4
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
    160
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./context\"",
        "value": "./context",
        "range": [
          29,
          40
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 29,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
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
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "range": [
              14,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "range": [
              14,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            14,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 1
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
        43,
        94
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
              "name": "context",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                },
                "range": [
                  63,
                  72
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Context",
                    "optional": false,
                    "range": [
                      65,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    65,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                56,
                72
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      80,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 4
                      },
                      "start": {
                        "column": 3,
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
                    "raw": "'bar'",
                    "value": "bar",
                    "range": [
                      86,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    79,
                    91
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
                }
              ],
              "range": [
                75,
                94
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            },
            "range": [
              56,
              94
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          50,
          94
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
      "exportKind": "value",
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
      "type": "ExportNamedDeclaration",
      "range": [
        96,
        160
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
              "name": "withContext",
              "optional": false,
              "range": [
                109,
                120
              ],
              "loc": {
                "end": {
                  "column": 24,
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
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  154,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 7
                  },
                  "start": {
                    "column": 58,
                    "line": 7
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "range": [
                          127,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 31,
                            "line": 7
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          133,
                          138
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
                        126,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 30,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 7
                      },
                      "start": {
                        "column": 44,
                        "line": 7
                      }
                    },
                    "range": [
                      140,
                      149
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Context",
                        "optional": false,
                        "range": [
                          142,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 7
                          },
                          "start": {
                            "column": 46,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        142,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 7
                        },
                        "start": {
                          "column": 46,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    124,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                123,
                159
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            },
            "range": [
              109,
              159
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 7
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
          103,
          160
        ],
        "loc": {
          "end": {
            "column": 64,
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
          "column": 64,
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
      "column": 64,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
