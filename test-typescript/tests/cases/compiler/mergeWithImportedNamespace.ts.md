__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    41
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        40
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
                21,
                38
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
                      "range": [
                        32,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 32,
                          "line": 1
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        36,
                        37
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 1
                        },
                        "start": {
                          "column": 36,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      32,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 1
                      },
                      "start": {
                        "column": 32,
                        "line": 1
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  28,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            19,
            40
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 1
            },
            "start": {
              "column": 19,
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
            18
          ],
          "decorators": [],
          "name": "N",
          "optional": false,
          "loc": {
            "end": {
              "column": 18,
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
          40
        ],
        "loc": {
          "end": {
            "column": 40,
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
          "column": 40,
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
    78
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./f1\"",
        "value": "./f1",
        "range": [
          16,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 16,
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
            "name": "N",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "name": "N",
            "optional": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
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
            9
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
        24,
        78
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
                49,
                76
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    68,
                    76
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
                          69,
                          70
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
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        },
                        "range": [
                          70,
                          75
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            72,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 27,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        69,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
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
                    66,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  56,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 31,
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
            43,
            78
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 2
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            41,
            42
          ],
          "decorators": [],
          "name": "N",
          "optional": false,
          "loc": {
            "end": {
              "column": 18,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "kind": "namespace",
        "range": [
          31,
          78
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "column": 1,
          "line": 4
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
      "column": 1,
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
