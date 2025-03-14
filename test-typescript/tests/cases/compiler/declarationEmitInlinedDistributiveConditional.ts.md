__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    467
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./api'",
        "value": "./api",
        "range": [
          51,
          58
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 1
          },
          "start": {
            "column": 51,
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
            "name": "dropPrivateProps1",
            "optional": false,
            "range": [
              8,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "name": "dropPrivateProps1",
            "optional": false,
            "range": [
              8,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
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
            25
          ],
          "loc": {
            "end": {
              "column": 25,
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
            "name": "dropPrivateProps2",
            "optional": false,
            "range": [
              27,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "range": [
              27,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          "range": [
            27,
            44
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        59
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "a",
            "optional": false,
            "range": [
              66,
              67
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        89,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 29,
                          "line": 2
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        94,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 34,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      89,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 2
                      },
                      "start": {
                        "column": 29,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "range": [
                        98,
                        102
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'secret'",
                      "value": "secret",
                      "range": [
                        104,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      98,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  88,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps1",
              "optional": false,
              "range": [
                70,
                87
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              70,
              114
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            66,
            114
          ],
          "loc": {
            "end": {
              "column": 54,
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
        60,
        115
      ],
      "loc": {
        "end": {
          "column": 55,
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
            "name": "b",
            "optional": false,
            "range": [
              262,
              263
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
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
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        290,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 34,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      285,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "range": [
                        294,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'secret'",
                      "value": "secret",
                      "range": [
                        300,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 4
                        },
                        "start": {
                          "column": 44,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      294,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  284,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps2",
              "optional": false,
              "range": [
                266,
                283
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              266,
              310
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            262,
            310
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        256,
        311
      ],
      "loc": {
        "end": {
          "column": 55,
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
    225
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./internal'",
        "value": "./internal",
        "range": [
          55,
          67
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 1
          },
          "start": {
            "column": 55,
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
            "name": "excludePrivateKeys1",
            "optional": false,
            "range": [
              8,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
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
            "name": "excludePrivateKeys1",
            "optional": false,
            "range": [
              8,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
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
            27
          ],
          "loc": {
            "end": {
              "column": 27,
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
            "name": "excludePrivateKeys2",
            "optional": false,
            "range": [
              29,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "range": [
              29,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "range": [
            29,
            48
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        68
      ],
      "loc": {
        "end": {
          "column": 68,
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
        69,
        146
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
              "name": "dropPrivateProps1",
              "optional": false,
              "range": [
                82,
                99
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      141,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 2
                      },
                      "start": {
                        "column": 72,
                        "line": 2
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "excludePrivateKeys1",
                  "optional": false,
                  "range": [
                    121,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 2
                    },
                    "start": {
                      "column": 52,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "range": [
                  121,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 2
                  },
                  "start": {
                    "column": 52,
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 2
                      },
                      "start": {
                        "column": 42,
                        "line": 2
                      }
                    },
                    "range": [
                      111,
                      116
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "range": [
                          113,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 2
                          },
                          "start": {
                            "column": 44,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        113,
                        116
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    108,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 33,
                    "line": 2
                  }
                },
                "range": [
                  102,
                  107
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        103,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 2
                        },
                        "start": {
                          "column": 34,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      103,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 34,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "range": [
                102,
                145
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 2
                },
                "start": {
                  "column": 33,
                  "line": 2
                }
              }
            },
            "range": [
              82,
              145
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          76,
          146
        ],
        "loc": {
          "end": {
            "column": 77,
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
          "column": 77,
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
        147,
        224
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
              "name": "dropPrivateProps2",
              "optional": false,
              "range": [
                160,
                177
              ],
              "loc": {
                "end": {
                  "column": 30,
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      219,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 3
                      },
                      "start": {
                        "column": 72,
                        "line": 3
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "excludePrivateKeys2",
                  "optional": false,
                  "range": [
                    199,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 3
                    },
                    "start": {
                      "column": 52,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  199,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 42,
                        "line": 3
                      }
                    },
                    "range": [
                      189,
                      194
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "range": [
                          191,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 3
                          },
                          "start": {
                            "column": 44,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        191,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 44,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    186,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
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
                    "column": 33,
                    "line": 3
                  }
                },
                "range": [
                  180,
                  185
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        181,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      181,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                180,
                223
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 3
                },
                "start": {
                  "column": 33,
                  "line": 3
                }
              }
            },
            "range": [
              160,
              223
            ],
            "loc": {
              "end": {
                "column": 76,
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
          154,
          224
        ],
        "loc": {
          "end": {
            "column": 77,
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
          "column": 77,
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
    331
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        100
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
          "name": "excludePrivateKeys1",
          "optional": false,
          "range": [
            24,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 52,
                  "line": 1
                }
              },
              "range": [
                52,
                57
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    54,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 1
                    },
                    "start": {
                      "column": 54,
                      "line": 1
                    }
                  }
                },
                "range": [
                  54,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 54,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              49,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 49,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 99,
              "line": 1
            },
            "start": {
              "column": 58,
              "line": 1
            }
          },
          "range": [
            58,
            99
          ],
          "typeAnnotation": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  78,
                  89
                ],
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "range": [
                          85,
                          88
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 1
                          },
                          "start": {
                            "column": 85,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        85,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 1
                        },
                        "start": {
                          "column": 85,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      79,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 1
                      },
                      "start": {
                        "column": 79,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 1
                  },
                  "start": {
                    "column": 78,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PublicKeys1",
                "optional": false,
                "range": [
                  67,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 1
                  },
                  "start": {
                    "column": 67,
                    "line": 1
                  }
                }
              },
              "range": [
                67,
                89
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 1
                },
                "start": {
                  "column": 67,
                  "line": 1
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 1
                },
                "start": {
                  "column": 62,
                  "line": 1
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    96,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 1
                    },
                    "start": {
                      "column": 96,
                      "line": 1
                    }
                  }
                },
                "range": [
                  96,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 1
                  },
                  "start": {
                    "column": 96,
                    "line": 1
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    92,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 1
                    },
                    "start": {
                      "column": 92,
                      "line": 1
                    }
                  }
                },
                "range": [
                  92,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 1
                  },
                  "start": {
                    "column": 92,
                    "line": 1
                  }
                }
              },
              "range": [
                92,
                98
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 1
                },
                "start": {
                  "column": 92,
                  "line": 1
                }
              }
            },
            "range": [
              60,
              99
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 1
              },
              "start": {
                "column": 60,
                "line": 1
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 48,
              "line": 1
            },
            "start": {
              "column": 43,
              "line": 1
            }
          },
          "range": [
            43,
            48
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "range": [
                  44,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 44,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                44,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 44,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          100
        ],
        "loc": {
          "end": {
            "column": 100,
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
          "column": 100,
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
        101,
        201
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
          "name": "excludePrivateKeys2",
          "optional": false,
          "range": [
            125,
            144
          ],
          "loc": {
            "end": {
              "column": 43,
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 2
                },
                "start": {
                  "column": 52,
                  "line": 2
                }
              },
              "range": [
                153,
                158
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    155,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 2
                    },
                    "start": {
                      "column": 54,
                      "line": 2
                    }
                  }
                },
                "range": [
                  155,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 2
                  },
                  "start": {
                    "column": 54,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              150,
              158
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 2
              },
              "start": {
                "column": 49,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 99,
              "line": 2
            },
            "start": {
              "column": 58,
              "line": 2
            }
          },
          "range": [
            159,
            200
          ],
          "typeAnnotation": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  179,
                  190
                ],
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "range": [
                          186,
                          189
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 2
                          },
                          "start": {
                            "column": 85,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        186,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 2
                        },
                        "start": {
                          "column": 85,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      180,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 2
                      },
                      "start": {
                        "column": 79,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 2
                  },
                  "start": {
                    "column": 78,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PublicKeys2",
                "optional": false,
                "range": [
                  168,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 2
                  },
                  "start": {
                    "column": 67,
                    "line": 2
                  }
                }
              },
              "range": [
                168,
                190
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 2
                },
                "start": {
                  "column": 67,
                  "line": 2
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 2
                },
                "start": {
                  "column": 62,
                  "line": 2
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    197,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 2
                    },
                    "start": {
                      "column": 96,
                      "line": 2
                    }
                  }
                },
                "range": [
                  197,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 2
                  },
                  "start": {
                    "column": 96,
                    "line": 2
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    193,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 2
                    },
                    "start": {
                      "column": 92,
                      "line": 2
                    }
                  }
                },
                "range": [
                  193,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 2
                  },
                  "start": {
                    "column": 92,
                    "line": 2
                  }
                }
              },
              "range": [
                193,
                199
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 2
                },
                "start": {
                  "column": 92,
                  "line": 2
                }
              }
            },
            "range": [
              161,
              200
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 2
              },
              "start": {
                "column": 60,
                "line": 2
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 48,
              "line": 2
            },
            "start": {
              "column": 43,
              "line": 2
            }
          },
          "range": [
            144,
            149
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "range": [
                  145,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 2
                  },
                  "start": {
                    "column": 44,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                145,
                148
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 2
                },
                "start": {
                  "column": 44,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          108,
          201
        ],
        "loc": {
          "end": {
            "column": 100,
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
          "column": 100,
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
        202,
        266
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PublicKeys1",
          "optional": false,
          "range": [
            214,
            225
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                231,
                232
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "range": [
              231,
              232
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            }
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "_",
                  "raw": "_"
                },
                "range": [
                  241,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 39,
                    "line": 3
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  251,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 49,
                    "line": 3
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  245,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              241,
              253
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                264,
                265
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 62,
                  "line": 3
                }
              }
            },
            "range": [
              264,
              265
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 3
              },
              "start": {
                "column": 62,
                "line": 3
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "range": [
              256,
              261
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 3
              },
              "start": {
                "column": 54,
                "line": 3
              }
            }
          },
          "range": [
            231,
            265
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 3
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          },
          "range": [
            225,
            228
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
                  226,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                226,
                227
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          209,
          266
        ],
        "loc": {
          "end": {
            "column": 64,
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
          "column": 64,
          "line": 3
        },
        "start": {
          "column": 0,
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
        "name": "PublicKeys2",
        "optional": false,
        "range": [
          272,
          283
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              296,
              297
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          },
          "range": [
            296,
            297
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 29,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "_",
                "raw": "_"
              },
              "range": [
                306,
                310
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 39,
                  "line": 4
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                316,
                318
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 4
                },
                "start": {
                  "column": 49,
                  "line": 4
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                310,
                316
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 4
                },
                "start": {
                  "column": 43,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            306,
            318
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 4
            },
            "start": {
              "column": 39,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              329,
              330
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 4
              },
              "start": {
                "column": 62,
                "line": 4
              }
            }
          },
          "range": [
            329,
            330
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 4
            },
            "start": {
              "column": 62,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "range": [
            321,
            326
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 4
            },
            "start": {
              "column": 54,
              "line": 4
            }
          }
        },
        "range": [
          296,
          330
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 4
          },
          "start": {
            "column": 29,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        },
        "range": [
          283,
          286
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
                284,
                285
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              284,
              285
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        267,
        331
      ],
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
      "column": 64,
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
