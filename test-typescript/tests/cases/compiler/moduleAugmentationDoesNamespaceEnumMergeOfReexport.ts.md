__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    97
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        97
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                48,
                95
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    69,
                    95
                  ],
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          79,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
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
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 9,
                            "line": 4
                          }
                        },
                        "range": [
                          80,
                          88
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            82,
                            88
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 4
                            },
                            "start": {
                              "column": 11,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        79,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    65,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  55,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            22,
            97
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            17,
            21
          ],
          "decorators": [],
          "name": "Root",
          "optional": false,
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
        "kind": "namespace",
        "range": [
          7,
          97
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
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
          "column": 1,
          "line": 6
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
      "column": 1,
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
    23
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./file\"",
        "value": "./file",
        "range": [
          14,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 23,
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
    244
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./reexport\"",
        "value": "./reexport",
        "range": [
          20,
          32
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "type": "ExportNamedDeclaration",
            "range": [
              118,
              174
            ],
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "body": {
                "type": "TSEnumBody",
                "range": [
                  135,
                  174
                ],
                "members": [
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      145,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        156,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      156,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        167,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      167,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "range": [
                  130,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "range": [
                125,
                174
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          63,
          176
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 3
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"./reexport\"",
        "value": "./reexport",
        "range": [
          50,
          62
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        35,
        176
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              },
              "range": [
                193,
                206
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "range": [
                        195,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Root",
                      "optional": false,
                      "range": [
                        198,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 20,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      195,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      203,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    195,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  }
                },
                "range": [
                  195,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              192,
              206
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            192,
            206
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 14,
              "line": 12
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        178,
        207
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              },
              "range": [
                215,
                224
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "range": [
                      217,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Root",
                    "optional": false,
                    "range": [
                      220,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    217,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  217,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              214,
              224
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "range": [
                  227,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 13
                  },
                  "start": {
                    "column": 19,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Root",
                "optional": false,
                "range": [
                  230,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 13
                  }
                }
              },
              "range": [
                227,
                234
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                235,
                236
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            },
            "range": [
              227,
              236
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
          },
          "range": [
            214,
            236
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        208,
        237
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            239,
            240
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            241,
            242
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 2,
              "line": 15
            }
          }
        },
        "range": [
          239,
          242
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        239,
        243
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
