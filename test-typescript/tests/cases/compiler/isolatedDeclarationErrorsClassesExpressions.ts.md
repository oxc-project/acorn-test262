__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    246
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        50
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
            "init": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  25,
                  50
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
                        31,
                        34
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
                        34,
                        42
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          36,
                          42
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
                    "value": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        45,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      31,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
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
                    "column": 25,
                    "line": 1
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "range": [
                19,
                50
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              50
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          50
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls",
              "optional": false,
              "range": [
                122,
                125
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              115,
              126
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          109,
          128
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 56,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "range": [
          62,
          64
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cls",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 51,
                "line": 6
              }
            },
            "range": [
              104,
              107
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  106,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 6
                  },
                  "start": {
                    "column": 53,
                    "line": 6
                  }
                }
              },
              "range": [
                106,
                107
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 53,
                  "line": 6
                }
              }
            }
          },
          "range": [
            101,
            107
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 48,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        },
        "range": [
          64,
          100
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      83,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 6
                      },
                      "start": {
                        "column": 31,
                        "line": 6
                      }
                    },
                    "range": [
                      84,
                      91
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          86,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        86,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 6
                        },
                        "start": {
                          "column": 33,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    80,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 27,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 40,
                    "line": 6
                  }
                },
                "range": [
                  93,
                  99
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    96,
                    99
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
                75,
                99
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
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
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              65,
              99
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        53,
        128
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
        131,
        153
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            149,
            153
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "range": [
            144,
            148
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          138,
          153
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
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
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        155,
        193
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            189,
            193
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 34,
              "line": 15
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "range": [
            168,
            171
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 15
            },
            "start": {
              "column": 13,
              "line": 15
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                183,
                187
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 15
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "id",
            "optional": false,
            "range": [
              180,
              182
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 25,
                "line": 15
              }
            }
          },
          "optional": false,
          "range": [
            180,
            188
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "range": [
          162,
          193
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        195,
        246
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
              "name": "classes",
              "optional": false,
              "range": [
                208,
                215
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ClassExpression",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        225,
                        227
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 30,
                          "line": 19
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": null,
                    "range": [
                      219,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 24,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "ClassExpression",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        234,
                        236
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 19
                        },
                        "start": {
                          "column": 39,
                          "line": 19
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": null,
                    "range": [
                      229,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 19
                      },
                      "start": {
                        "column": 34,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  218,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 19
                  },
                  "start": {
                    "column": 23,
                    "line": 19
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    241,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 19
                    },
                    "start": {
                      "column": 46,
                      "line": 19
                    }
                  }
                },
                "range": [
                  241,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 19
                  },
                  "start": {
                    "column": 46,
                    "line": 19
                  }
                }
              },
              "range": [
                218,
                246
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              }
            },
            "range": [
              208,
              246
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          202,
          246
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 51,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 51,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
