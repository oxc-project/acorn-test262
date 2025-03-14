__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    221,
    2049
  ],
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              },
              "range": [
                240,
                245
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  242,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              233,
              245
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            233,
            245
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        221,
        246
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 6
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
        "name": "ts",
        "optional": false,
        "range": [
          255,
          257
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"typescript\"",
          "value": "typescript",
          "range": [
            268,
            280
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          260,
          281
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "range": [
        248,
        282
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    },
                    "range": [
                      376,
                      386
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          378,
                          384
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 12
                          },
                          "start": {
                            "column": 17,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        378,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                    371,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    389,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 28,
                      "line": 12
                    }
                  }
                },
                "range": [
                  371,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              365,
              392
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 13
                      },
                      "start": {
                        "column": 17,
                        "line": 13
                      }
                    },
                    "range": [
                      410,
                      430
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "range": [
                            412,
                            414
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
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CompilerOptions",
                          "optional": false,
                          "range": [
                            415,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 13
                            },
                            "start": {
                              "column": 22,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          412,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 13
                          },
                          "start": {
                            "column": 19,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        412,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 13
                        },
                        "start": {
                          "column": 19,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    403,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 13
                    },
                    "start": {
                      "column": 10,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    433,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 13
                    },
                    "start": {
                      "column": 40,
                      "line": 13
                    }
                  }
                },
                "range": [
                  403,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              397,
              436
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    },
                    "range": [
                      452,
                      518
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          499,
                          518
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "range": [
                                  500,
                                  502
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 15
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BuilderProgram",
                                "optional": false,
                                "range": [
                                  503,
                                  517
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                500,
                                517
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 15
                                },
                                "start": {
                                  "column": 62,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              500,
                              517
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 15
                              },
                              "start": {
                                "column": 62,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 15
                          },
                          "start": {
                            "column": 61,
                            "line": 15
                          }
                        }
                      },
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "range": [
                            454,
                            456
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 15
                            },
                            "start": {
                              "column": 16,
                              "line": 15
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WatchCompilerHostOfFilesAndCompilerOptions",
                          "optional": false,
                          "range": [
                            457,
                            499
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 15
                            },
                            "start": {
                              "column": 19,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          454,
                          499
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        454,
                        518
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    448,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
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
                        "name": "rootFiles",
                        "optional": false,
                        "range": [
                          531,
                          540
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
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "files",
                        "optional": false,
                        "range": [
                          542,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 16
                          },
                          "start": {
                            "column": 19,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        531,
                        547
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "range": [
                          557,
                          564
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "range": [
                          557,
                          564
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        557,
                        564
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "useCaseSensitiveFileNames",
                        "optional": false,
                        "range": [
                          575,
                          600
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                608,
                                610
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 19
                                },
                                "start": {
                                  "column": 41,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "range": [
                                611,
                                614
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 19
                                },
                                "start": {
                                  "column": 44,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              608,
                              614
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 19
                              },
                              "start": {
                                "column": 41,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "useCaseSensitiveFileNames",
                            "optional": false,
                            "range": [
                              615,
                              640
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 19
                              },
                              "start": {
                                "column": 48,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            608,
                            640
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 19
                            },
                            "start": {
                              "column": 41,
                              "line": 19
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          602,
                          640
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 19
                          },
                          "start": {
                            "column": 35,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        575,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getNewLine",
                        "optional": false,
                        "range": [
                          650,
                          660
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                668,
                                670
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 20
                                },
                                "start": {
                                  "column": 26,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "range": [
                                671,
                                674
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 20
                                },
                                "start": {
                                  "column": 29,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              668,
                              674
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 20
                              },
                              "start": {
                                "column": 26,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "newLine",
                            "optional": false,
                            "range": [
                              675,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 20
                              },
                              "start": {
                                "column": 33,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            668,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 20
                            },
                            "start": {
                              "column": 26,
                              "line": 20
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          662,
                          682
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        650,
                        682
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "range": [
                          692,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 21
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              713,
                              715
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 21
                              },
                              "start": {
                                "column": 29,
                                "line": 21
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              716,
                              719
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 21
                              },
                              "start": {
                                "column": 32,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            713,
                            719
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 21
                            },
                            "start": {
                              "column": 29,
                              "line": 21
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getCurrentDirectory",
                          "optional": false,
                          "range": [
                            720,
                            739
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 21
                            },
                            "start": {
                              "column": 36,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          713,
                          739
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 21
                          },
                          "start": {
                            "column": 29,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        692,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "range": [
                          749,
                          770
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "range": [
                                808,
                                815
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 22
                                },
                                "start": {
                                  "column": 67,
                                  "line": 22
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                783,
                                785
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 22
                                },
                                "start": {
                                  "column": 42,
                                  "line": 22
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "range": [
                                786,
                                807
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 22
                                },
                                "start": {
                                  "column": 45,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              783,
                              807
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 22
                              },
                              "start": {
                                "column": 42,
                                "line": 22
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            783,
                            816
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 22
                            },
                            "start": {
                              "column": 42,
                              "line": 22
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
                            "name": "options",
                            "optional": false,
                            "range": [
                              772,
                              779
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 22
                              },
                              "start": {
                                "column": 31,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          772,
                          816
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 22
                          },
                          "start": {
                            "column": 31,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        749,
                        816
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "range": [
                          827,
                          837
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              839,
                              841
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 24
                              },
                              "start": {
                                "column": 20,
                                "line": 24
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              842,
                              845
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 24
                              },
                              "start": {
                                "column": 23,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            839,
                            845
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 24
                            },
                            "start": {
                              "column": 20,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fileExists",
                          "optional": false,
                          "range": [
                            846,
                            856
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 24
                            },
                            "start": {
                              "column": 27,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          839,
                          856
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 24
                          },
                          "start": {
                            "column": 20,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        827,
                        856
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "range": [
                          866,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              876,
                              878
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 25
                              },
                              "start": {
                                "column": 18,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              879,
                              882
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 25
                              },
                              "start": {
                                "column": 21,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            876,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 25
                            },
                            "start": {
                              "column": 18,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "range": [
                            883,
                            891
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 25
                            },
                            "start": {
                              "column": 25,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          876,
                          891
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        866,
                        891
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "directoryExists",
                        "optional": false,
                        "range": [
                          901,
                          916
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              918,
                              920
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 26
                              },
                              "start": {
                                "column": 25,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              921,
                              924
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 26
                              },
                              "start": {
                                "column": 28,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            918,
                            924
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 26
                            },
                            "start": {
                              "column": 25,
                              "line": 26
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "directoryExists",
                          "optional": false,
                          "range": [
                            925,
                            940
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 26
                            },
                            "start": {
                              "column": 32,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          918,
                          940
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 26
                          },
                          "start": {
                            "column": 25,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        901,
                        940
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getDirectories",
                        "optional": false,
                        "range": [
                          950,
                          964
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              966,
                              968
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 27
                              },
                              "start": {
                                "column": 24,
                                "line": 27
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              969,
                              972
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 27
                              },
                              "start": {
                                "column": 27,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            966,
                            972
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 27
                            },
                            "start": {
                              "column": 24,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDirectories",
                          "optional": false,
                          "range": [
                            973,
                            987
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 27
                            },
                            "start": {
                              "column": 31,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          966,
                          987
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 27
                          },
                          "start": {
                            "column": 24,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        950,
                        987
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "readDirectory",
                        "optional": false,
                        "range": [
                          997,
                          1010
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              1012,
                              1014
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 28
                              },
                              "start": {
                                "column": 23,
                                "line": 28
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              1015,
                              1018
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 28
                              },
                              "start": {
                                "column": 26,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            1012,
                            1018
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 28
                            },
                            "start": {
                              "column": 23,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readDirectory",
                          "optional": false,
                          "range": [
                            1019,
                            1032
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 28
                            },
                            "start": {
                              "column": 30,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          1012,
                          1032
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 28
                          },
                          "start": {
                            "column": 23,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        997,
                        1032
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "realpath",
                        "optional": false,
                        "range": [
                          1042,
                          1050
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "range": [
                              1052,
                              1054
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 29
                              },
                              "start": {
                                "column": 18,
                                "line": 29
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "range": [
                              1055,
                              1058
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 29
                              },
                              "start": {
                                "column": 21,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            1052,
                            1058
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 29
                            },
                            "start": {
                              "column": 18,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "realpath",
                          "optional": false,
                          "range": [
                            1059,
                            1067
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 29
                            },
                            "start": {
                              "column": 25,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          1052,
                          1067
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 29
                          },
                          "start": {
                            "column": 18,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        1042,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "watchFile",
                        "optional": false,
                        "range": [
                          1078,
                          1087
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                1089,
                                1091
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 31
                                },
                                "start": {
                                  "column": 19,
                                  "line": 31
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "range": [
                                1092,
                                1095
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 31
                                },
                                "start": {
                                  "column": 22,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              1089,
                              1095
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 31
                              },
                              "start": {
                                "column": 19,
                                "line": 31
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "watchFile",
                            "optional": false,
                            "range": [
                              1096,
                              1105
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 31
                              },
                              "start": {
                                "column": 26,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            1089,
                            1105
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 31
                            },
                            "start": {
                              "column": 19,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          1089,
                          1106
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 31
                          },
                          "start": {
                            "column": 19,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        1078,
                        1106
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "watchDirectory",
                        "optional": false,
                        "range": [
                          1116,
                          1130
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "range": [
                                1132,
                                1134
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 32
                                },
                                "start": {
                                  "column": 24,
                                  "line": 32
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "range": [
                                1135,
                                1138
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 32
                                },
                                "start": {
                                  "column": 27,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              1132,
                              1138
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 32
                              },
                              "start": {
                                "column": 24,
                                "line": 32
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "watchDirectory",
                            "optional": false,
                            "range": [
                              1139,
                              1153
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 32
                              },
                              "start": {
                                "column": 31,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            1132,
                            1153
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 32
                            },
                            "start": {
                              "column": 24,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          1132,
                          1154
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 32
                          },
                          "start": {
                            "column": 24,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        1116,
                        1154
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createProgram",
                        "optional": false,
                        "range": [
                          1164,
                          1177
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 33
                          },
                          "start": {
                            "column": 8,
                            "line": 33
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "range": [
                            1179,
                            1181
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 33
                            },
                            "start": {
                              "column": 23,
                              "line": 33
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createAbstractBuilder",
                          "optional": false,
                          "range": [
                            1182,
                            1203
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 33
                            },
                            "start": {
                              "column": 26,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          1179,
                          1203
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 33
                          },
                          "start": {
                            "column": 23,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        1164,
                        1203
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    521,
                    1209
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 34
                    },
                    "start": {
                      "column": 83,
                      "line": 15
                    }
                  }
                },
                "range": [
                  448,
                  1209
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              442,
              1210
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "name": "origCreateProgram",
                  "optional": false,
                  "range": [
                    1428,
                    1445
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 10,
                      "line": 38
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "range": [
                      1448,
                      1452
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 38
                      },
                      "start": {
                        "column": 30,
                        "line": 38
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "range": [
                      1453,
                      1466
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 38
                      },
                      "start": {
                        "column": 35,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1448,
                    1466
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 38
                    },
                    "start": {
                      "column": 30,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1428,
                  1466
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1422,
              1467
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "range": [
                    1472,
                    1476
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "range": [
                    1477,
                    1490
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 39
                    },
                    "start": {
                      "column": 9,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1472,
                  1490
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"** We're about to create the program! **\"",
                            "value": "** We're about to create the program! **",
                            "range": [
                              1557,
                              1599
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 40
                              },
                              "start": {
                                "column": 20,
                                "line": 40
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "range": [
                              1545,
                              1552
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 40
                              },
                              "start": {
                                "column": 8,
                                "line": 40
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              1553,
                              1556
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 40
                              },
                              "start": {
                                "column": 16,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            1545,
                            1556
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 40
                            },
                            "start": {
                              "column": 8,
                              "line": 40
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1545,
                          1600
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        1545,
                        1601
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "range": [
                              1635,
                              1644
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 41
                              },
                              "start": {
                                "column": 33,
                                "line": 41
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "range": [
                              1646,
                              1653
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 41
                              },
                              "start": {
                                "column": 44,
                                "line": 41
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "range": [
                              1655,
                              1659
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 41
                              },
                              "start": {
                                "column": 53,
                                "line": 41
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "range": [
                              1661,
                              1671
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 41
                              },
                              "start": {
                                "column": 59,
                                "line": 41
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "range": [
                            1617,
                            1634
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 41
                            },
                            "start": {
                              "column": 15,
                              "line": 41
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1617,
                          1672
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 41
                          },
                          "start": {
                            "column": 15,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        1610,
                        1673
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    }
                  ],
                  "range": [
                    1535,
                    1679
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 42
                    },
                    "start": {
                      "column": 67,
                      "line": 39
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
                    "name": "rootNames",
                    "optional": false,
                    "range": [
                      1494,
                      1503
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 26,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      1505,
                      1512
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 39
                      },
                      "start": {
                        "column": 37,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "range": [
                      1514,
                      1518
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 39
                      },
                      "start": {
                        "column": 46,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "range": [
                      1520,
                      1530
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 39
                      },
                      "start": {
                        "column": 52,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  1493,
                  1679
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 25,
                    "line": 39
                  }
                }
              },
              "range": [
                1472,
                1679
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              1472,
              1679
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 39
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
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "range": [
                    1690,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "range": [
                      1714,
                      1718
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 43
                      },
                      "start": {
                        "column": 34,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "range": [
                      1719,
                      1737
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 43
                      },
                      "start": {
                        "column": 39,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1714,
                    1737
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 43
                    },
                    "start": {
                      "column": 34,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1690,
                  1737
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1684,
              1738
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "range": [
                    1744,
                    1748
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "range": [
                    1749,
                    1767
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 45
                    },
                    "start": {
                      "column": 9,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1744,
                  1767
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"** We finished making the program! **\"",
                            "value": "** We finished making the program! **",
                            "range": [
                              1803,
                              1842
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 46
                              },
                              "start": {
                                "column": 20,
                                "line": 46
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "range": [
                              1791,
                              1798
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 46
                              },
                              "start": {
                                "column": 8,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              1799,
                              1802
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 46
                              },
                              "start": {
                                "column": 16,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1791,
                            1802
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 46
                            },
                            "start": {
                              "column": 8,
                              "line": 46
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1791,
                          1843
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 46
                          },
                          "start": {
                            "column": 8,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1791,
                        1844
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "range": [
                              1876,
                              1883
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 47
                              },
                              "start": {
                                "column": 31,
                                "line": 47
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "range": [
                              1853,
                              1874
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 47
                              },
                              "start": {
                                "column": 8,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1853,
                            1875
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 47
                            },
                            "start": {
                              "column": 8,
                              "line": 47
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1853,
                          1884
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 47
                          },
                          "start": {
                            "column": 8,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1853,
                        1885
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    1781,
                    1891
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 48
                    },
                    "start": {
                      "column": 41,
                      "line": 45
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
                    "name": "program",
                    "optional": false,
                    "range": [
                      1770,
                      1777
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 45
                      },
                      "start": {
                        "column": 30,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  1770,
                  1891
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 30,
                    "line": 45
                  }
                }
              },
              "range": [
                1744,
                1891
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              1744,
              1892
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "range": [
                    2026,
                    2030
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 51
                    },
                    "start": {
                      "column": 26,
                      "line": 51
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "range": [
                    2004,
                    2006
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "range": [
                    2007,
                    2025
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 51
                    },
                    "start": {
                      "column": 7,
                      "line": 51
                    }
                  }
                },
                "range": [
                  2004,
                  2025
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "range": [
                2004,
                2031
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              2004,
              2032
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          305,
          2034
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 21,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "range": [
          293,
          302
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        284,
        2034
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "range": [
            2036,
            2045
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          2036,
          2047
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        2036,
        2048
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
