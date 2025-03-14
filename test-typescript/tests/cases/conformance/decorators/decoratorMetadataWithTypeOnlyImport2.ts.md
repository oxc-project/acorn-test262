__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    56
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        55
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
                30,
                53
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    51,
                    53
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Service",
                  "optional": false,
                  "range": [
                    43,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  37,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            26,
            55
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 26,
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
            25
          ],
          "decorators": [],
          "name": "Services",
          "optional": false,
          "loc": {
            "end": {
              "column": 25,
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
          55
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
    139
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./services'",
        "value": "./services",
        "range": [
          30,
          42
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 30,
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
            "name": "Services",
            "optional": false,
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Services",
            "optional": false,
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
        }
      ],
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              },
              "range": [
                68,
                73
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  70,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              59,
              73
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            59,
            73
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        45,
        74
      ],
      "loc": {
        "end": {
          "column": 29,
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
        75,
        138
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            93,
            138
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "decorator",
                      "optional": false,
                      "range": [
                        98,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 3,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      98,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 3,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    97,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 2,
                      "line": 5
                    }
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "range": [
                  112,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
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
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                },
                "range": [
                  117,
                  135
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "range": [
                        119,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Service",
                      "optional": false,
                      "range": [
                        128,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      119,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    119,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 9,
                      "line": 6
                    }
                  }
                }
              },
              "value": null,
              "range": [
                97,
                136
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 5
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
              "column": 18,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Main",
          "optional": false,
          "range": [
            88,
            92
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          82,
          138
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          "column": 1,
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
