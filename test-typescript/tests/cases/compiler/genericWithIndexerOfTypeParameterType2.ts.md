__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    270
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        101
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            54,
            101
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
                "name": "_itemsByKey",
                "optional": false,
                "range": [
                  60,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                },
                "range": [
                  71,
                  98
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 2
                              },
                              "start": {
                                "column": 23,
                                "line": 2
                              }
                            },
                            "range": [
                              79,
                              87
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                81,
                                87
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 2
                                },
                                "start": {
                                  "column": 25,
                                  "line": 2
                                }
                              }
                            }
                          },
                          "range": [
                            76,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 2
                            },
                            "start": {
                              "column": 20,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 2
                          },
                          "start": {
                            "column": 32,
                            "line": 2
                          }
                        },
                        "range": [
                          88,
                          95
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TItem",
                            "optional": false,
                            "range": [
                              90,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 2
                              },
                              "start": {
                                "column": 34,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            90,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 2
                            },
                            "start": {
                              "column": 34,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        75,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    73,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                60,
                99
              ],
              "loc": {
                "end": {
                  "column": 43,
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
              "column": 54,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Collection",
          "optional": false,
          "range": [
            13,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            53
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CollectionItem",
                  "optional": false,
                  "range": [
                    38,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 1
                    },
                    "start": {
                      "column": 38,
                      "line": 1
                    }
                  }
                },
                "range": [
                  38,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TItem",
                "optional": false,
                "range": [
                  24,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                24,
                52
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          101
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
        103,
        165
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            149,
            165
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "range": [
                  155,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                  158,
                  163
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    161,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              "range": [
                155,
                163
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 46,
              "line": 5
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "List",
          "optional": false,
          "range": [
            116,
            120
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Collection",
          "optional": false,
          "range": [
            129,
            139
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            139,
            149
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListItem",
                "optional": false,
                "range": [
                  140,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                }
              },
              "range": [
                140,
                148
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 5
            },
            "start": {
              "column": 36,
              "line": 5
            }
          }
        },
        "range": [
          110,
          165
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          "column": 1,
          "line": 7
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
        167,
        197
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            195,
            197
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 28,
              "line": 9
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CollectionItem",
          "optional": false,
          "range": [
            180,
            194
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          174,
          197
        ],
        "loc": {
          "end": {
            "column": 30,
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
          "column": 30,
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
        199,
        269
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            244,
            269
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
                "name": "__isNew",
                "optional": false,
                "range": [
                  250,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
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
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                },
                "range": [
                  257,
                  266
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    259,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                }
              },
              "value": null,
              "range": [
                250,
                267
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 45,
              "line": 11
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ListItem",
          "optional": false,
          "range": [
            212,
            220
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "CollectionItem",
          "optional": false,
          "range": [
            229,
            243
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 11
            },
            "start": {
              "column": 30,
              "line": 11
            }
          }
        },
        "range": [
          206,
          269
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
