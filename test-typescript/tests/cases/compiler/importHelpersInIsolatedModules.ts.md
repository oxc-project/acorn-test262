__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    124
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        18
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            18
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 18,
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
          18
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "column": 18,
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
        19,
        47
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            44,
            47
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 28,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
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
            32,
            33
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
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            42,
            43
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        "range": [
          26,
          47
        ],
        "loc": {
          "end": {
            "column": 28,
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                64,
                69
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  66,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              61,
              69
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            61,
            69
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        49,
        70
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          85,
          123
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                91,
                97
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                97,
                121
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  114,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "range": [
                          99,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        98,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    },
                    "range": [
                      104,
                      112
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        106,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
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
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              91,
              121
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
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
            "line": 10
          },
          "start": {
            "column": 8,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "range": [
              73,
              76
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 6
              }
            }
          },
          "range": [
            72,
            76
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          83,
          84
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        72,
        123
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    110
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          11
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          30,
          33
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
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
          18,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        12,
        33
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                50,
                55
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  52,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              47,
              55
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            47,
            55
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        35,
        56
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          71,
          109
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                77,
                83
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                83,
                107
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  100,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "range": [
                          85,
                          88
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        84,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    },
                    "range": [
                      90,
                      98
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        92,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    89,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
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
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              77,
              107
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
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
            "line": 10
          },
          "start": {
            "column": 8,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "range": [
              59,
              62
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 6
              }
            }
          },
          "range": [
            58,
            62
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          69,
          70
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        58,
        109
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    519
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        66
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__extends",
          "optional": false,
          "range": [
            24,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              },
              "range": [
                35,
                45
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    37,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                },
                "range": [
                  37,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              34,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              },
              "range": [
                48,
                58
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    50,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "range": [
                  50,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              47,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 59,
              "line": 1
            }
          },
          "range": [
            59,
            65
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              61,
              65
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 1
              },
              "start": {
                "column": 61,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          66
        ],
        "loc": {
          "end": {
            "column": 66,
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
          "column": 66,
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
        67,
        132
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__assign",
          "optional": false,
          "range": [
            91,
            99
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
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 34,
                  "line": 2
                }
              },
              "range": [
                101,
                106
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  103,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              100,
              106
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 33,
                "line": 2
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "sources",
              "optional": false,
              "range": [
                111,
                118
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 44,
                  "line": 2
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 51,
                  "line": 2
                }
              },
              "range": [
                118,
                125
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    120,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 2
                    },
                    "start": {
                      "column": 53,
                      "line": 2
                    }
                  }
                },
                "range": [
                  120,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 53,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              108,
              125
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 41,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 64,
              "line": 2
            },
            "start": {
              "column": 59,
              "line": 2
            }
          },
          "range": [
            126,
            131
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              128,
              131
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 2
              },
              "start": {
                "column": 61,
                "line": 2
              }
            }
          }
        },
        "range": [
          74,
          132
        ],
        "loc": {
          "end": {
            "column": 65,
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
          "column": 65,
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
        133,
        245
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "range": [
            157,
            167
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              },
              "range": [
                178,
                190
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "range": [
                      180,
                      188
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
                  "range": [
                    180,
                    188
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
                "range": [
                  180,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 3
                  },
                  "start": {
                    "column": 47,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              168,
              190
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 3
                },
                "start": {
                  "column": 65,
                  "line": 3
                }
              },
              "range": [
                198,
                203
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  200,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 3
                  },
                  "start": {
                    "column": 67,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              192,
              203
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 3
              },
              "start": {
                "column": 59,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 93,
                  "line": 3
                },
                "start": {
                  "column": 76,
                  "line": 3
                }
              },
              "range": [
                209,
                226
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      211,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 3
                      },
                      "start": {
                        "column": 78,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      220,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 3
                      },
                      "start": {
                        "column": 87,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  211,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 3
                  },
                  "start": {
                    "column": 78,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              205,
              226
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 3
              },
              "start": {
                "column": 72,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 105,
                  "line": 3
                },
                "start": {
                  "column": 100,
                  "line": 3
                }
              },
              "range": [
                233,
                238
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  235,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 3
                  },
                  "start": {
                    "column": 102,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              228,
              238
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 3
              },
              "start": {
                "column": 95,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 111,
              "line": 3
            },
            "start": {
              "column": 106,
              "line": 3
            }
          },
          "range": [
            239,
            244
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              241,
              244
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 3
              },
              "start": {
                "column": 108,
                "line": 3
              }
            }
          }
        },
        "range": [
          140,
          245
        ],
        "loc": {
          "end": {
            "column": 112,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 112,
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
        246,
        329
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__param",
          "optional": false,
          "range": [
            270,
            277
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 4
                },
                "start": {
                  "column": 42,
                  "line": 4
                }
              },
              "range": [
                288,
                296
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  290,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 4
                  },
                  "start": {
                    "column": 44,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              278,
              296
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 4
                },
                "start": {
                  "column": 61,
                  "line": 4
                }
              },
              "range": [
                307,
                317
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    309,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 4
                    },
                    "start": {
                      "column": 63,
                      "line": 4
                    }
                  }
                },
                "range": [
                  309,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 4
                  },
                  "start": {
                    "column": 63,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              298,
              317
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 4
              },
              "start": {
                "column": 52,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 4
            },
            "start": {
              "column": 72,
              "line": 4
            }
          },
          "range": [
            318,
            328
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                320,
                328
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 4
                },
                "start": {
                  "column": 74,
                  "line": 4
                }
              }
            },
            "range": [
              320,
              328
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 4
              },
              "start": {
                "column": 74,
                "line": 4
              }
            }
          }
        },
        "range": [
          253,
          329
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 4
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
          "column": 83,
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
        330,
        413
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__metadata",
          "optional": false,
          "range": [
            354,
            364
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 46,
                  "line": 5
                }
              },
              "range": [
                376,
                381
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  378,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 48,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              365,
              381
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 35,
                "line": 5
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 71,
                  "line": 5
                },
                "start": {
                  "column": 66,
                  "line": 5
                }
              },
              "range": [
                396,
                401
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  398,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 5
                  },
                  "start": {
                    "column": 68,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              383,
              401
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 5
              },
              "start": {
                "column": 53,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 5
            },
            "start": {
              "column": 72,
              "line": 5
            }
          },
          "range": [
            402,
            412
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                404,
                412
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 5
                },
                "start": {
                  "column": 74,
                  "line": 5
                }
              }
            },
            "range": [
              404,
              412
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 5
              },
              "start": {
                "column": 74,
                "line": 5
              }
            }
          }
        },
        "range": [
          337,
          413
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 83,
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
        414,
        518
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "range": [
            438,
            447
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 41,
                  "line": 6
                }
              },
              "range": [
                455,
                460
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  457,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 43,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              448,
              460
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 34,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 6
                },
                "start": {
                  "column": 58,
                  "line": 6
                }
              },
              "range": [
                472,
                477
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  474,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 6
                  },
                  "start": {
                    "column": 60,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              462,
              477
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 6
              },
              "start": {
                "column": 48,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 6
                },
                "start": {
                  "column": 66,
                  "line": 6
                }
              },
              "range": [
                480,
                490
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    482,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 6
                    },
                    "start": {
                      "column": 68,
                      "line": 6
                    }
                  }
                },
                "range": [
                  482,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 6
                  },
                  "start": {
                    "column": 68,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              479,
              490
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 6
              },
              "start": {
                "column": 65,
                "line": 6
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 97,
                  "line": 6
                },
                "start": {
                  "column": 87,
                  "line": 6
                }
              },
              "range": [
                501,
                511
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    503,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 6
                    },
                    "start": {
                      "column": 89,
                      "line": 6
                    }
                  }
                },
                "range": [
                  503,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 6
                  },
                  "start": {
                    "column": 89,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              492,
              511
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 6
              },
              "start": {
                "column": 78,
                "line": 6
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 103,
              "line": 6
            },
            "start": {
              "column": 98,
              "line": 6
            }
          },
          "range": [
            512,
            517
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              514,
              517
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 6
              },
              "start": {
                "column": 100,
                "line": 6
              }
            }
          }
        },
        "range": [
          421,
          518
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 6
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
          "column": 104,
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
