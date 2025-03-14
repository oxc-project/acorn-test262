__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    80
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        23
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "range": [
            12,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
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
        },
        "range": [
          7,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
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
          "column": 23,
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
        24,
        79
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
              "name": "fn",
              "optional": false,
              "range": [
                37,
                39
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
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
                    "name": "o",
                    "optional": false,
                    "range": [
                      44,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
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
                      "body": [],
                      "range": [
                        74,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 2
                        },
                        "start": {
                          "column": 50,
                          "line": 2
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 2
                            },
                            "start": {
                              "column": 26,
                              "line": 2
                            }
                          },
                          "range": [
                            50,
                            69
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "X",
                                    "optional": false,
                                    "range": [
                                      53,
                                      54
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    53,
                                    54
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 2
                                    }
                                  }
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "range": [
                                    57,
                                    66
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 2
                                    }
                                  }
                                }
                              ],
                              "range": [
                                53,
                                66
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 2
                                },
                                "start": {
                                  "column": 29,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              52,
                              69
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 2
                              },
                              "start": {
                                "column": 28,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          48,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      47,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    44,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                42,
                78
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              37,
              78
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          31,
          79
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 55,
          "line": 2
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
      "column": 0,
      "line": 3
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
    154
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 17,
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
            "name": "fn",
            "optional": false,
            "range": [
              8,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "range": [
              8,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
        24,
        123
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
              "name": "m",
              "optional": false,
              "range": [
                37,
                38
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
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "range": [
                      114,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
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
                      120,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    114,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                41,
                123
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "range": [
              37,
              123
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          31,
          123
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        126,
        153
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
              "name": "x",
              "optional": false,
              "range": [
                139,
                140
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
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "range": [
                      145,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
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
                    "name": "fn",
                    "optional": false,
                    "range": [
                      148,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    145,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                143,
                152
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "range": [
              139,
              152
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          133,
          153
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 28,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
