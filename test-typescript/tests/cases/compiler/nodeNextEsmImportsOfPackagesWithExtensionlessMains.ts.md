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
        34
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "address",
          "optional": false,
          "range": [
            16,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
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
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
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
          "column": 34,
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
      "column": 34,
      "line": 1
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
    131
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "range": [
          17,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            },
            "range": [
              29,
              34
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                31,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            }
          },
          "range": [
            28,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 35,
            "line": 1
          }
        },
        "range": [
          35,
          40
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            37,
            40
          ],
          "loc": {
            "end": {
              "column": 40,
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
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "range": [
                    99,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullthrows",
                  "optional": false,
                  "range": [
                    85,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                },
                "range": [
                  85,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              77,
              108
            ],
            "loc": {
              "end": {
                "column": 35,
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
          71,
          110
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 29,
            "line": 2
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          60,
          70
        ],
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "loc": {
          "end": {
            "column": 28,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "kind": "namespace",
      "range": [
        42,
        110
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
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "range": [
          120,
          130
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        111,
        131
      ],
      "loc": {
        "end": {
          "column": 20,
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
      "column": 20,
      "line": 5
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
    234
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'ip'",
        "value": "ip",
        "range": [
          20,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ip",
            "optional": false,
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        25
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "raw": "'nullthrows'",
        "value": "nullthrows",
        "range": [
          49,
          61
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            33,
            43
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nullthrows",
            "optional": false,
            "range": [
              33,
              43
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        26,
        62
      ],
      "loc": {
        "end": {
          "column": 36,
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
        159,
        234
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ip",
                        "optional": false,
                        "range": [
                          218,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "address",
                        "optional": false,
                        "range": [
                          221,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        218,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      218,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 20,
                        "line": 5
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullthrows",
                  "optional": false,
                  "range": [
                    207,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "range": [
                  207,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              },
              "range": [
                200,
                232
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            196,
            234
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 37,
              "line": 4
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getAddress",
          "optional": false,
          "range": [
            175,
            185
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 36,
              "line": 4
            },
            "start": {
              "column": 28,
              "line": 4
            }
          },
          "range": [
            187,
            195
          ],
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              189,
              195
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          }
        },
        "range": [
          166,
          234
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
      "exportKind": "value",
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
      "column": 1,
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
