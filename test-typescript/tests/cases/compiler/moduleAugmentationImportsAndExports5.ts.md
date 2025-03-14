__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            17
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
          "column": 17,
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
    34
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        33
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            33
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  21,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                },
                "range": [
                  22,
                  30
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    24,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                21,
                31
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          33
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
      "exportKind": "value",
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
    339
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./f1\"",
        "value": "./f1",
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "name": "A",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
            9
          ],
          "loc": {
            "end": {
              "column": 9,
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
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./f2\"",
        "value": "./f2",
        "range": [
          40,
          46
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              32,
              33
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              32,
              33
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            32,
            33
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 2
            },
            "start": {
              "column": 8,
              "line": 2
            }
          }
        }
      ],
      "range": [
        24,
        47
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                49,
                50
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 0,
                  "line": 4
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "range": [
                51,
                60
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "range": [
              49,
              60
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              61,
              64
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            49,
            64
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    88,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 4
                    },
                    "start": {
                      "column": 39,
                      "line": 4
                    }
                  }
                },
                "range": [
                  81,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              79,
              100
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            67,
            100
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 4
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "range": [
          49,
          100
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        49,
        100
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              120,
              155
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  141,
                  155
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        143,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
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
                          "column": 36,
                          "line": 7
                        },
                        "start": {
                          "column": 28,
                          "line": 7
                        }
                      },
                      "range": [
                        144,
                        152
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          146,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      143,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 7
                      },
                      "start": {
                        "column": 27,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ifc",
                "optional": false,
                "range": [
                  137,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "range": [
                127,
                155
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 39,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              160,
              195
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  181,
                  195
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        183,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
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
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 28,
                          "line": 8
                        }
                      },
                      "range": [
                        184,
                        192
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          186,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 8
                          },
                          "start": {
                            "column": 30,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      183,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "range": [
                  177,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              "range": [
                167,
                195
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 39,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          114,
          197
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          112,
          113
        ],
        "decorators": [],
        "name": "N",
        "optional": false,
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
      "kind": "namespace",
      "range": [
        102,
        197
      ],
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          205,
          206
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "range": [
            209,
            210
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Ifc",
          "optional": false,
          "range": [
            211,
            214
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        },
        "range": [
          209,
          214
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        198,
        215
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          223,
          224
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "range": [
            227,
            228
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 11
            },
            "start": {
              "column": 11,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "range": [
            229,
            232
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "range": [
          227,
          232
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        }
      },
      "range": [
        216,
        233
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                275,
                336
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      285,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    },
                    "range": [
                      290,
                      293
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          292,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 15
                          },
                          "start": {
                            "column": 15,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        292,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    285,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      303,
                      306
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
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    },
                    "range": [
                      308,
                      311
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          310,
                          311
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        310,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    303,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      321,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    },
                    "range": [
                      326,
                      329
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          328,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        328,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    321,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                273,
                274
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "range": [
              263,
              336
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          257,
          338
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 22,
            "line": 13
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"./f1\"",
        "value": "./f1",
        "range": [
          250,
          256
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 13
          }
        }
      },
      "range": [
        235,
        338
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
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
    106
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./f1\"",
        "value": "./f1",
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "name": "A",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
            9
          ],
          "loc": {
            "end": {
              "column": 9,
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
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./f3\"",
        "value": "./f3",
        "range": [
          31,
          37
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "specifiers": [],
      "range": [
        24,
        38
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                45,
                48
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    47,
                    48
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
                "range": [
                  47,
                  48
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
              }
            },
            "range": [
              44,
              48
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            44,
            48
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        40,
        49
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "b",
            "optional": false,
            "range": [
              54,
              55
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    60,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                "range": [
                  58,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                58,
                65
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                66,
                67
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              58,
              67
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            54,
            67
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        50,
        68
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "c",
            "optional": false,
            "range": [
              73,
              74
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    77,
                    78
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    79,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "range": [
                  77,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                77,
                84
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                85,
                86
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "range": [
              77,
              86
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            73,
            86
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        69,
        87
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "d",
            "optional": false,
            "range": [
              92,
              93
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    96,
                    97
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    98,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  }
                },
                "range": [
                  96,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                96,
                103
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "range": [
              96,
              105
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            92,
            105
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        88,
        106
      ],
      "loc": {
        "end": {
          "column": 18,
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
      "column": 18,
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
