__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    36,
    268
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "range": [
          43,
          45
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'./visibilityOfCrossModuleTypeUsage_fs'",
          "value": "./visibilityOfCrossModuleTypeUsage_fs",
          "range": [
            56,
            95
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        },
        "range": [
          48,
          96
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "range": [
        36,
        97
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "range": [
          105,
          111
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'./visibilityOfCrossModuleTypeUsage_server'",
          "value": "./visibilityOfCrossModuleTypeUsage_server",
          "range": [
            122,
            165
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        },
        "range": [
          114,
          166
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        98,
        167
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 4
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
        169,
        267
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            201,
            267
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "workspace",
                "optional": false,
                "range": [
                  207,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
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
                    "column": 32,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                },
                "range": [
                  216,
                  235
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "server",
                      "optional": false,
                      "range": [
                        218,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWorkspace",
                      "optional": false,
                      "range": [
                        225,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 7
                        },
                        "start": {
                          "column": 22,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      218,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    218,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                207,
                236
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 4,
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
                "name": "server",
                "optional": false,
                "range": [
                  241,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                },
                "range": [
                  248,
                  264
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "server",
                      "optional": false,
                      "range": [
                        250,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IServer",
                      "optional": false,
                      "range": [
                        257,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 20,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      250,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    250,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                241,
                265
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 32,
              "line": 6
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConfiguration",
          "optional": false,
          "range": [
            186,
            200
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        "range": [
          176,
          267
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
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
    139
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
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            25,
            28
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IServer",
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
        "range": [
          7,
          28
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
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
          "line": 2
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
        30,
        138
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            58,
            138
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toAbsolutePath",
                "optional": false,
                "range": [
                  64,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    },
                    "range": [
                      85,
                      94
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IServer",
                        "optional": false,
                        "range": [
                          87,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 27,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        87,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 27,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    79,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "workspaceRelativePath",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 5
                      },
                      "start": {
                        "column": 58,
                        "line": 5
                      }
                    },
                    "range": [
                      118,
                      126
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        120,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 5
                        },
                        "start": {
                          "column": 60,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    96,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 5
                  },
                  "start": {
                    "column": 67,
                    "line": 5
                  }
                },
                "range": [
                  127,
                  135
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    129,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 5
                    },
                    "start": {
                      "column": 69,
                      "line": 5
                    }
                  }
                }
              },
              "static": false,
              "range": [
                64,
                136
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 4
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IWorkspace",
          "optional": false,
          "range": [
            47,
            57
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 4
            },
            "start": {
              "column": 17,
              "line": 4
            }
          }
        },
        "range": [
          37,
          138
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
      "exportKind": "type",
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    224
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "commands",
        "optional": false,
        "range": [
          7,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'./visibilityOfCrossModuleTypeUsage_commands'",
          "value": "./visibilityOfCrossModuleTypeUsage_commands",
          "range": [
            26,
            71
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        },
        "range": [
          18,
          72
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        73
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "absoluteWorkspacePath",
                  "optional": false,
                  "range": [
                    137,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configuration",
                        "optional": false,
                        "range": [
                          200,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 3
                          },
                          "start": {
                            "column": 71,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "server",
                        "optional": false,
                        "range": [
                          214,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 3
                          },
                          "start": {
                            "column": 85,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        200,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 3
                        },
                        "start": {
                          "column": 71,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configuration",
                        "optional": false,
                        "range": [
                          161,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 3
                          },
                          "start": {
                            "column": 32,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "workspace",
                        "optional": false,
                        "range": [
                          175,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 3
                          },
                          "start": {
                            "column": 46,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        161,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 3
                        },
                        "start": {
                          "column": 32,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toAbsolutePath",
                      "optional": false,
                      "range": [
                        185,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 3
                        },
                        "start": {
                          "column": 56,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      161,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 3
                      },
                      "start": {
                        "column": 32,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    161,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                },
                "range": [
                  137,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              133,
              222
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          127,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 53,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "range": [
          83,
          86
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "configuration",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 2
              },
              "start": {
                "column": 26,
                "line": 2
              }
            },
            "range": [
              100,
              125
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commands",
                  "optional": false,
                  "range": [
                    102,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 28,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IConfiguration",
                  "optional": false,
                  "range": [
                    111,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 2
                    },
                    "start": {
                      "column": 37,
                      "line": 2
                    }
                  }
                },
                "range": [
                  102,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
                    "line": 2
                  }
                }
              },
              "range": [
                102,
                125
              ],
              "loc": {
                "end": {
                  "column": 51,
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
            87,
            125
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        }
      ],
      "range": [
        74,
        224
      ],
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
