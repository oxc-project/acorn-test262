__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    95
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        35
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            35
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
                "name": "foo",
                "optional": false,
                "range": [
                  21,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                },
                "range": [
                  24,
                  32
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    26,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                21,
                33
              ],
              "loc": {
                "end": {
                  "column": 16,
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
          "name": "d",
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
          35
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        36,
        52
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  48,
                  51
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      50,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                47,
                51
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": null,
            "range": [
              47,
              51
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          43,
          52
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "column": 16,
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
        53,
        94
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
                "raw": "null",
                "value": null,
                "range": [
                  87,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                80,
                92
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            78,
            94
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
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
            69,
            72
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          },
          "range": [
            74,
            77
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                76,
                77
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              76,
              77
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        },
        "range": [
          60,
          94
        ],
        "loc": {
          "end": {
            "column": 41,
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
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
    88
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        35
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            35
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
                "name": "bar",
                "optional": false,
                "range": [
                  21,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                },
                "range": [
                  24,
                  32
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    26,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                21,
                33
              ],
              "loc": {
                "end": {
                  "column": 16,
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
          "name": "d",
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
          35
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
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                41,
                44
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "range": [
                    43,
                    44
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
                  43,
                  44
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
              40,
              44
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
            40,
            44
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
      "kind": "var",
      "range": [
        36,
        45
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
      "type": "ExportNamedDeclaration",
      "range": [
        46,
        87
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
                "raw": "null",
                "value": null,
                "range": [
                  80,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                73,
                85
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            71,
            87
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
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
            62,
            65
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          },
          "range": [
            67,
            70
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              69,
              70
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        },
        "range": [
          53,
          87
        ],
        "loc": {
          "end": {
            "column": 41,
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
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
    95
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        35
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            35
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
                "name": "baz",
                "optional": false,
                "range": [
                  21,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                },
                "range": [
                  24,
                  32
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    26,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                21,
                33
              ],
              "loc": {
                "end": {
                  "column": 16,
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
          "name": "d",
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
          35
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        36,
        52
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  48,
                  51
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      50,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                47,
                51
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": null,
            "range": [
              47,
              51
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          43,
          52
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "column": 16,
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
        53,
        94
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
                "raw": "null",
                "value": null,
                "range": [
                  87,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                80,
                92
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            78,
            94
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
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
            69,
            72
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          },
          "range": [
            74,
            77
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                76,
                77
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              76,
              77
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        },
        "range": [
          60,
          94
        ],
        "loc": {
          "end": {
            "column": 41,
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
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
    96
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        36
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            36
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
                "name": "bing",
                "optional": false,
                "range": [
                  21,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
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
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                21,
                34
              ],
              "loc": {
                "end": {
                  "column": 17,
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
          "name": "d",
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
          36
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        37,
        53
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  49,
                  52
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      51,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    51,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                48,
                52
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": null,
            "range": [
              48,
              52
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          44,
          53
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "column": 16,
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
        54,
        95
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
                "raw": "null",
                "value": null,
                "range": [
                  88,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                81,
                93
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            79,
            95
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
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
            70,
            73
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          },
          "range": [
            75,
            78
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              77,
              78
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        },
        "range": [
          61,
          95
        ],
        "loc": {
          "end": {
            "column": 41,
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
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
    91
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "range": [
          7,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
          "raw": "\"./importDecl_require\"",
          "value": "./importDecl_require",
          "range": [
            20,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "range": [
          12,
          43
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        44
      ],
      "loc": {
        "end": {
          "column": 44,
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
        45,
        90
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
                "raw": "null",
                "value": null,
                "range": [
                  83,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 38,
                    "line": 2
                  }
                }
              },
              "range": [
                76,
                88
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            74,
            90
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 2
            },
            "start": {
              "column": 29,
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
          "name": "foo2",
          "optional": false,
          "range": [
            61,
            65
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 28,
              "line": 2
            },
            "start": {
              "column": 22,
              "line": 2
            }
          },
          "range": [
            67,
            73
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "range": [
                  69,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "range": [
                69,
                73
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "range": [
              69,
              73
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          }
        },
        "range": [
          52,
          90
        ],
        "loc": {
          "end": {
            "column": 45,
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
          "column": 45,
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
    229,
    1416
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "range": [
          236,
          238
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./importDecl_require\"",
          "value": "./importDecl_require",
          "range": [
            249,
            271
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        },
        "range": [
          241,
          272
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "range": [
        229,
        273
      ],
      "loc": {
        "end": {
          "column": 44,
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
        287,
        308
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
              "name": "x4",
              "optional": false,
              "range": [
                298,
                300
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "range": [
                  303,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
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
                  306,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "range": [
                303,
                307
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "range": [
              298,
              307
            ],
            "loc": {
              "end": {
                "column": 20,
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
          294,
          308
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "column": 21,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        309,
        330
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
              "name": "d4",
              "optional": false,
              "range": [
                320,
                322
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "range": [
                  325,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  328,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
                    "line": 8
                  }
                }
              },
              "range": [
                325,
                329
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "range": [
              320,
              329
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          316,
          330
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 21,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        331,
        356
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
              "name": "f4",
              "optional": false,
              "range": [
                342,
                344
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                  "name": "m4",
                  "optional": false,
                  "range": [
                    347,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
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
                    350,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 19,
                      "line": 9
                    }
                  }
                },
                "range": [
                  347,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                347,
                355
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "range": [
              342,
              355
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          338,
          356
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        358,
        522
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
                381,
                402
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
                      "name": "x2",
                      "optional": false,
                      "range": [
                        392,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "range": [
                          397,
                          399
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 20,
                            "line": 12
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
                          400,
                          401
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 23,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        397,
                        401
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
                      392,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  388,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                407,
                428
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
                      "name": "d2",
                      "optional": false,
                      "range": [
                        418,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "init": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "range": [
                          423,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "range": [
                          426,
                          427
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        423,
                        427
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 20,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      418,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  414,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                433,
                458
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
                      "name": "f2",
                      "optional": false,
                      "range": [
                        444,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
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
                          "name": "m4",
                          "optional": false,
                          "range": [
                            449,
                            451
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
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
                            452,
                            455
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 23,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          449,
                          455
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 20,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        449,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 14
                        },
                        "start": {
                          "column": 20,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      444,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  440,
                  458
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                    "name": "x3",
                    "optional": false,
                    "range": [
                      468,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "range": [
                        473,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
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
                        476,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 16
                        },
                        "start": {
                          "column": 16,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      473,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    468,
                    477
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
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                464,
                478
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                    "name": "d3",
                    "optional": false,
                    "range": [
                      487,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "range": [
                        492,
                        494
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 13,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        495,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 17
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      492,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    487,
                    496
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
              "declare": false,
              "kind": "var",
              "range": [
                483,
                497
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                    "name": "f3",
                    "optional": false,
                    "range": [
                      506,
                      508
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
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
                        "name": "m4",
                        "optional": false,
                        "range": [
                          511,
                          513
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 18
                          },
                          "start": {
                            "column": 13,
                            "line": 18
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
                          514,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        511,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      511,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    506,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                502,
                520
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "range": [
            375,
            522
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            372,
            374
          ],
          "decorators": [],
          "name": "m1",
          "optional": false,
          "loc": {
            "end": {
              "column": 16,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        },
        "kind": "module",
        "range": [
          365,
          522
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_m4",
        "optional": false,
        "range": [
          556,
          562
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./importDecl_require1\"",
          "value": "./importDecl_require1",
          "range": [
            573,
            596
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 22
            },
            "start": {
              "column": 24,
              "line": 22
            }
          }
        },
        "range": [
          565,
          597
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 22
          },
          "start": {
            "column": 16,
            "line": 22
          }
        }
      },
      "range": [
        549,
        598
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        599,
        634
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
              "name": "useGlo_m4_d4",
              "optional": false,
              "range": [
                610,
                622
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_m4",
                "optional": false,
                "range": [
                  625,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 23
                  },
                  "start": {
                    "column": 26,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  632,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 23
                  },
                  "start": {
                    "column": 33,
                    "line": 23
                  }
                }
              },
              "range": [
                625,
                633
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 23
                },
                "start": {
                  "column": 26,
                  "line": 23
                }
              }
            },
            "range": [
              610,
              633
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          606,
          634
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        635,
        674
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
              "name": "useGlo_m4_f4",
              "optional": false,
              "range": [
                646,
                658
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
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
                  "name": "glo_m4",
                  "optional": false,
                  "range": [
                    661,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 26,
                      "line": 24
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
                    668,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 24
                    },
                    "start": {
                      "column": 33,
                      "line": 24
                    }
                  }
                },
                "range": [
                  661,
                  671
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 26,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "range": [
                661,
                673
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 26,
                  "line": 24
                }
              }
            },
            "range": [
              646,
              673
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          642,
          674
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fncOnly_m4",
        "optional": false,
        "range": [
          727,
          737
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./importDecl_require2\"",
          "value": "./importDecl_require2",
          "range": [
            748,
            771
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 27
            },
            "start": {
              "column": 28,
              "line": 27
            }
          }
        },
        "range": [
          740,
          772
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 27
          },
          "start": {
            "column": 20,
            "line": 27
          }
        }
      },
      "range": [
        720,
        773
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        774,
        821
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
              "name": "useFncOnly_m4_f4",
              "optional": false,
              "range": [
                785,
                801
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
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
                  "name": "fncOnly_m4",
                  "optional": false,
                  "range": [
                    804,
                    814
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 28
                    },
                    "start": {
                      "column": 30,
                      "line": 28
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
                    815,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 28
                    },
                    "start": {
                      "column": 41,
                      "line": 28
                    }
                  }
                },
                "range": [
                  804,
                  818
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 28
                  },
                  "start": {
                    "column": 30,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                804,
                820
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 28
                },
                "start": {
                  "column": 30,
                  "line": 28
                }
              }
            },
            "range": [
              785,
              820
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          781,
          821
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 47,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private_m4",
        "optional": false,
        "range": [
          869,
          879
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 31
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./importDecl_require3\"",
          "value": "./importDecl_require3",
          "range": [
            890,
            913
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 31
            },
            "start": {
              "column": 28,
              "line": 31
            }
          }
        },
        "range": [
          882,
          914
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 31
          },
          "start": {
            "column": 20,
            "line": 31
          }
        }
      },
      "range": [
        862,
        915
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        916,
        1035
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
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
                    "name": "x3",
                    "optional": false,
                    "range": [
                      957,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "range": [
                        962,
                        972
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 33
                        },
                        "start": {
                          "column": 13,
                          "line": 33
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
                        973,
                        974
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 33
                        },
                        "start": {
                          "column": 24,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      962,
                      974
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    957,
                    974
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                953,
                975
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                    "name": "d3",
                    "optional": false,
                    "range": [
                      984,
                      986
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "range": [
                        989,
                        999
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 34
                        },
                        "start": {
                          "column": 13,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        1000,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 34
                        },
                        "start": {
                          "column": 24,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      989,
                      1001
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    984,
                    1001
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                980,
                1002
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                    "name": "f3",
                    "optional": false,
                    "range": [
                      1011,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
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
                        "name": "private_m4",
                        "optional": false,
                        "range": [
                          1016,
                          1026
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 35
                          },
                          "start": {
                            "column": 13,
                            "line": 35
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
                          1027,
                          1030
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 35
                          },
                          "start": {
                            "column": 24,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1016,
                        1030
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 35
                        },
                        "start": {
                          "column": 13,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1016,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1011,
                    1032
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1007,
                1033
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            947,
            1035
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 31,
              "line": 32
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            930,
            946
          ],
          "decorators": [],
          "name": "usePrivate_m4_m1",
          "optional": false,
          "loc": {
            "end": {
              "column": 30,
              "line": 32
            },
            "start": {
              "column": 14,
              "line": 32
            }
          }
        },
        "kind": "module",
        "range": [
          923,
          1035
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "range": [
          1073,
          1075
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 39
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./importDecl_require4\"",
          "value": "./importDecl_require4",
          "range": [
            1086,
            1109
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 39
            },
            "start": {
              "column": 20,
              "line": 39
            }
          }
        },
        "range": [
          1078,
          1110
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 39
          },
          "start": {
            "column": 12,
            "line": 39
          }
        }
      },
      "range": [
        1066,
        1111
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1112,
        1137
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
              "name": "d",
              "optional": false,
              "range": [
                1123,
                1124
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
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
                  "name": "m5",
                  "optional": false,
                  "range": [
                    1127,
                    1129
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 15,
                      "line": 40
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "range": [
                    1130,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 40
                    },
                    "start": {
                      "column": 18,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1127,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 40
                  },
                  "start": {
                    "column": 15,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                1127,
                1136
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            },
            "range": [
              1123,
              1136
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 40
              },
              "start": {
                "column": 11,
                "line": 40
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1119,
          1137
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 40
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiImport_m4",
        "optional": false,
        "range": [
          1193,
          1207
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./importDecl_require\"",
          "value": "./importDecl_require",
          "range": [
            1218,
            1240
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 43
            },
            "start": {
              "column": 32,
              "line": 43
            }
          }
        },
        "range": [
          1210,
          1241
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 43
          },
          "start": {
            "column": 24,
            "line": 43
          }
        }
      },
      "range": [
        1186,
        1242
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1256,
        1307
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
              "name": "useMultiImport_m4_x4",
              "optional": false,
              "range": [
                1267,
                1287
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "range": [
                  1290,
                  1304
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 44
                  },
                  "start": {
                    "column": 34,
                    "line": 44
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
                  1305,
                  1306
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 44
                  },
                  "start": {
                    "column": 49,
                    "line": 44
                  }
                }
              },
              "range": [
                1290,
                1306
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 44
                },
                "start": {
                  "column": 34,
                  "line": 44
                }
              }
            },
            "range": [
              1267,
              1306
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 44
              },
              "start": {
                "column": 11,
                "line": 44
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1263,
          1307
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 51,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1308,
        1359
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
              "name": "useMultiImport_m4_d4",
              "optional": false,
              "range": [
                1319,
                1339
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "range": [
                  1342,
                  1356
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 45
                  },
                  "start": {
                    "column": 34,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1357,
                  1358
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 45
                  },
                  "start": {
                    "column": 49,
                    "line": 45
                  }
                }
              },
              "range": [
                1342,
                1358
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 45
                },
                "start": {
                  "column": 34,
                  "line": 45
                }
              }
            },
            "range": [
              1319,
              1358
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 45
              },
              "start": {
                "column": 11,
                "line": 45
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1315,
          1359
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 45
          },
          "start": {
            "column": 7,
            "line": 45
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 51,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1360,
        1415
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
              "name": "useMultiImport_m4_f4",
              "optional": false,
              "range": [
                1371,
                1391
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 46
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
                  "name": "multiImport_m4",
                  "optional": false,
                  "range": [
                    1394,
                    1408
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 46
                    },
                    "start": {
                      "column": 34,
                      "line": 46
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
                    1409,
                    1412
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 46
                    },
                    "start": {
                      "column": 49,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1394,
                  1412
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 46
                  },
                  "start": {
                    "column": 34,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "range": [
                1394,
                1414
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 46
                },
                "start": {
                  "column": 34,
                  "line": 46
                }
              }
            },
            "range": [
              1371,
              1414
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 46
              },
              "start": {
                "column": 11,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1367,
          1415
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 46
          },
          "start": {
            "column": 7,
            "line": 46
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 55,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
