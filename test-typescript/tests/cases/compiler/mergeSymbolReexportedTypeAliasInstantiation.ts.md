__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    129
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'.'",
        "value": ".",
        "range": [
          22,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 22,
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
            "name": "Row2",
            "optional": false,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "name": "Row2",
            "optional": false,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            12
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "name": "C",
            "optional": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
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
            15
          ],
          "loc": {
            "end": {
              "column": 15,
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
        25
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                33,
                71
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rowData",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      },
                      "range": [
                        44,
                        58
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            50,
                            58
                          ],
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                51,
                                57
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 2
                                },
                                "start": {
                                  "column": 25,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 2
                            },
                            "start": {
                              "column": 24,
                              "line": 2
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Row2",
                          "optional": false,
                          "range": [
                            46,
                            50
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 2
                            },
                            "start": {
                              "column": 20,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          46,
                          58
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      37,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 2
                    },
                    "start": {
                      "column": 34,
                      "line": 2
                    }
                  },
                  "range": [
                    60,
                    70
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      63,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 2
                      },
                      "start": {
                        "column": 37,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  36,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              32,
              71
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                99,
                103
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 2
                },
                "start": {
                  "column": 73,
                  "line": 2
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
                "name": "rowData",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 2
                    },
                    "start": {
                      "column": 56,
                      "line": 2
                    }
                  },
                  "range": [
                    82,
                    93
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        88,
                        93
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            89,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 2
                            },
                            "start": {
                              "column": 63,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 2
                        },
                        "start": {
                          "column": 62,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Row2",
                      "optional": false,
                      "range": [
                        84,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 2
                        },
                        "start": {
                          "column": 58,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      84,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 2
                      },
                      "start": {
                        "column": 58,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  75,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              74,
              104
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 2
              },
              "start": {
                "column": 48,
                "line": 2
              }
            }
          },
          "range": [
            32,
            104
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        26,
        104
      ],
      "loc": {
        "end": {
          "column": 78,
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                113,
                116
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    115,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "range": [
                  115,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              111,
              116
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
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
                  "name": "s",
                  "optional": false,
                  "range": [
                    121,
                    122
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    124,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "range": [
                  121,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              119,
              128
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            111,
            128
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        105,
        128
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
    80
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'.'",
        "value": ".",
        "range": [
          7,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "specifiers": [],
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Row2",
              "optional": false,
              "range": [
                39,
                43
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                49,
                51
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                43,
                46
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
                      44,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ]
            },
            "range": [
              34,
              51
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
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
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
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
                    "name": "s",
                    "optional": false,
                    "range": [
                      65,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
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
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    },
                    "range": [
                      67,
                      75
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        69,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
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
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                63,
                77
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              54,
              77
            ],
            "loc": {
              "end": {
                "column": 25,
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
          30,
          79
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "'.'",
        "value": ".",
        "range": [
          26,
          29
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "range": [
        11,
        79
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
      "line": 6
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
    36
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./common'",
        "value": "./common",
        "range": [
          24,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "range": [
              13,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "range": [
              13,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "range": [
            13,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        }
      ],
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
    24
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        24
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            22,
            24
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Row2",
          "optional": false,
          "range": [
            17,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "range": [
          7,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "column": 24,
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
      "column": 24,
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
