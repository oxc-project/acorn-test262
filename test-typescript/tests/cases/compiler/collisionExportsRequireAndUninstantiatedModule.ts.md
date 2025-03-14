__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    247
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        69
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
                41,
                67
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    60,
                    67
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "range": [
                  48,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            22,
            69
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            21
          ],
          "decorators": [],
          "name": "require",
          "optional": false,
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          69
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "line": 4
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
        70,
        123
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
                  116,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                109,
                121
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            103,
            123
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 33,
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
            86,
            89
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
              "column": 32,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          },
          "range": [
            91,
            102
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "range": [
                  93,
                  100
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  101,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 31,
                    "line": 5
                  }
                }
              },
              "range": [
                93,
                102
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              93,
              102
            ],
            "loc": {
              "end": {
                "column": 32,
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
          77,
          123
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
        124,
        192
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
                164,
                190
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    183,
                    190
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 9
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    181,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 21,
                      "line": 9
                    }
                  }
                },
                "range": [
                  171,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            }
          ],
          "range": [
            146,
            192
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 22,
              "line": 8
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            138,
            145
          ],
          "decorators": [],
          "name": "exports",
          "optional": false,
          "loc": {
            "end": {
              "column": 21,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        },
        "kind": "module",
        "range": [
          131,
          192
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
          "column": 1,
          "line": 11
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
        193,
        247
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
                  240,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "range": [
                233,
                245
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            227,
            247
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 34,
              "line": 12
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
            209,
            213
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 33,
              "line": 12
            },
            "start": {
              "column": 22,
              "line": 12
            }
          },
          "range": [
            215,
            226
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "range": [
                  217,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  225,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 32,
                    "line": 12
                  }
                }
              },
              "range": [
                217,
                226
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "range": [
              217,
              226
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 24,
                "line": 12
              }
            }
          }
        },
        "range": [
          200,
          247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
