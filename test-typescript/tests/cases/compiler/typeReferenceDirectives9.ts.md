__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    20
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          19
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lib",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        19
      ],
      "loc": {
        "end": {
          "column": 19,
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
    27
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        26
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            17,
            26
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
                "name": "x",
                "optional": false,
                "range": [
                  23,
                  24
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
              "value": null,
              "range": [
                23,
                24
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
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
        "implements": [],
        "superClass": null,
        "range": [
          7,
          26
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
    31,
    242
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./main\"",
        "value": "./main",
        "range": [
          49,
          57
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "range": [
              39,
              42
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "range": [
              39,
              42
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            39,
            42
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 3
            },
            "start": {
              "column": 8,
              "line": 3
            }
          }
        }
      ],
      "range": [
        31,
        58
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              "name": "Cls",
              "optional": false,
              "range": [
                59,
                62
              ],
              "loc": {
                "end": {
                  "column": 3,
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
                63,
                72
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              59,
              72
            ],
            "loc": {
              "end": {
                "column": 13,
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
              73,
              76
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "range": [
            59,
            76
          ],
          "loc": {
            "end": {
              "column": 17,
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
                    99,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 4
                    },
                    "start": {
                      "column": 40,
                      "line": 4
                    }
                  }
                },
                "range": [
                  92,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              90,
              111
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 4
              },
              "start": {
                "column": 31,
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
            79,
            111
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 4
            }
          }
        },
        "range": [
          59,
          111
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        59,
        111
      ],
      "loc": {
        "end": {
          "column": 52,
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                157,
                184
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
                      167,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    },
                    "range": [
                      172,
                      177
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lib",
                        "optional": false,
                        "range": [
                          174,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        174,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    167,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                  "column": 18,
                  "line": 7
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
                153,
                156
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "range": [
              143,
              184
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
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
                      222,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 17,
                        "line": 11
                      }
                    }
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    },
                    "range": [
                      227,
                      232
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lib",
                        "optional": false,
                        "range": [
                          229,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 11
                          },
                          "start": {
                            "column": 24,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        229,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 11
                        },
                        "start": {
                          "column": 24,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    213,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                203,
                239
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                199,
                202
              ],
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "kind": "namespace",
            "range": [
              189,
              239
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          137,
          241
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 24,
            "line": 6
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"./main\"",
        "value": "./main",
        "range": [
          128,
          136
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "range": [
        113,
        241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
      "line": 14
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
    137
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./main\"",
        "value": "./main",
        "range": [
          20,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
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
            "name": "Cls",
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
        }
      ],
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "raw": "\"./mod1\"",
        "value": "./mod1",
        "range": [
          37,
          45
        ],
        "loc": {
          "end": {
            "column": 15,
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
        30,
        46
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 2
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
        48,
        71
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
              "name": "cls",
              "optional": false,
              "range": [
                61,
                64
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "range": [
                67,
                70
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "range": [
              61,
              70
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          55,
          71
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "column": 23,
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
        72,
        107
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
              "name": "foo",
              "optional": false,
              "range": [
                85,
                88
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Cls",
                    "optional": false,
                    "range": [
                      95,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    91,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
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
                    101,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                },
                "range": [
                  91,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                91,
                106
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
            "range": [
              85,
              106
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          79,
          107
        ],
        "loc": {
          "end": {
            "column": 35,
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
          "column": 35,
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
        108,
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
              "name": "bar",
              "optional": false,
              "range": [
                121,
                124
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "range": [
                    127,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
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
                    131,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 23,
                      "line": 6
                    }
                  }
                },
                "range": [
                  127,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                127,
                136
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              121,
              136
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          115,
          137
        ],
        "loc": {
          "end": {
            "column": 29,
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
          "column": 29,
          "line": 6
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
      "column": 29,
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
