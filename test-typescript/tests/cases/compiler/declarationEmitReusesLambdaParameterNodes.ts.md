__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    130
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        46
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Whatever",
          "optional": false,
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
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
                  24,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
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
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
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
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 36,
                    "line": 1
                  }
                },
                "range": [
                  36,
                  44
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    38,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 38,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                35,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            23,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          7,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
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
          "column": 46,
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
        47,
        129
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "range": [
            59,
            64
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  93,
                  106
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "range": [
                        94,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 2
                        },
                        "start": {
                          "column": 47,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      94,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 2
                      },
                      "start": {
                        "column": 47,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"y\"",
                      "value": "y",
                      "range": [
                        102,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 2
                        },
                        "start": {
                          "column": 55,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      102,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 2
                      },
                      "start": {
                        "column": 55,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 2
                  },
                  "start": {
                    "column": 46,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "range": [
                  89,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                }
              },
              "range": [
                89,
                106
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 2
                },
                "start": {
                  "column": 42,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  116,
                  124
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "range": [
                        117,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 2
                        },
                        "start": {
                          "column": 70,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      117,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 2
                      },
                      "start": {
                        "column": 70,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 2
                  },
                  "start": {
                    "column": 69,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  109,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 2
                  },
                  "start": {
                    "column": 62,
                    "line": 2
                  }
                }
              },
              "range": [
                109,
                124
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 2
                },
                "start": {
                  "column": 62,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  127,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 2
                  },
                  "start": {
                    "column": 80,
                    "line": 2
                  }
                }
              },
              "range": [
                127,
                128
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 2
                },
                "start": {
                  "column": 80,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            89,
            128
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 2
            },
            "start": {
              "column": 42,
              "line": 2
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          },
          "range": [
            64,
            86
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
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "range": [
                    77,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                },
                "range": [
                  77,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 30,
                    "line": 2
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TThing",
                "optional": false,
                "range": [
                  68,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                68,
                85
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          54,
          129
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 2
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
          "column": 82,
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
    172
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react-select\"",
        "value": "react-select",
        "range": [
          22,
          36
        ],
        "loc": {
          "end": {
            "column": 36,
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
            "name": "Props",
            "optional": false,
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "name": "Props",
            "optional": false,
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
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
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 37,
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
        39,
        106
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
              "name": "CustomSelect1",
              "optional": false,
              "range": [
                52,
                65
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  104,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 65,
                    "line": 3
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 3
                      },
                      "start": {
                        "column": 40,
                        "line": 3
                      }
                    },
                    "range": [
                      79,
                      99
                    ],
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              86,
                              94
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Option",
                                  "optional": false,
                                  "range": [
                                    87,
                                    93
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  87,
                                  93
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 3
                              },
                              "start": {
                                "column": 47,
                                "line": 3
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "range": [
                              81,
                              86
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 3
                              },
                              "start": {
                                "column": 42,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            81,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 3
                            },
                            "start": {
                              "column": 42,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "range": [
                            97,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 3
                            },
                            "start": {
                              "column": 58,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        81,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 3
                        },
                        "start": {
                          "column": 42,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    78,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 3
                    },
                    "start": {
                      "column": 39,
                      "line": 3
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                },
                "range": [
                  68,
                  77
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "range": [
                        69,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 3
                        },
                        "start": {
                          "column": 30,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      69,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                68,
                106
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "range": [
              52,
              106
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 3
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
          46,
          106
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 3
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
          "column": 67,
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
        107,
        171
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            169,
            171
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 4
            },
            "start": {
              "column": 62,
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
          "name": "CustomSelect2",
          "optional": false,
          "range": [
            123,
            136
          ],
          "loc": {
            "end": {
              "column": 29,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 60,
                  "line": 4
                },
                "start": {
                  "column": 40,
                  "line": 4
                }
              },
              "range": [
                147,
                167
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        154,
                        162
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "range": [
                              155,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 4
                              },
                              "start": {
                                "column": 48,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            155,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 4
                            },
                            "start": {
                              "column": 48,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 47,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "range": [
                        149,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      149,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 42,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      165,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 4
                      },
                      "start": {
                        "column": 58,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  149,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              146,
              167
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 4
              },
              "start": {
                "column": 39,
                "line": 4
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 29,
              "line": 4
            }
          },
          "range": [
            136,
            145
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Option",
                "optional": false,
                "range": [
                  137,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                137,
                143
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          114,
          171
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 4
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
          "column": 64,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
