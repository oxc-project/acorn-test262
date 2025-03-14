__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    11
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
    32
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        31
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
              "name": "__rest",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                },
                "range": [
                  25,
                  30
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    27,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
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
                19,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              19,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ],
        "declare": true,
        "kind": "var",
        "range": [
          7,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
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
          "column": 31,
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
    93
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        92
      ],
      "attributes": [],
      "declaration": {
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
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            43,
                            46
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 2
                            },
                            "start": {
                              "column": 10,
                              "line": 2
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
                          "name": "bar",
                          "optional": false,
                          "range": [
                            43,
                            46
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 2
                            },
                            "start": {
                              "column": 10,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          43,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 2
                          },
                          "start": {
                            "column": 10,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "extraArgs",
                          "optional": false,
                          "range": [
                            51,
                            60
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 2
                            },
                            "start": {
                              "column": 18,
                              "line": 2
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "range": [
                          48,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 2
                          },
                          "start": {
                            "column": 15,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      41,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      65,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 2
                      },
                      "start": {
                        "column": 32,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    41,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                35,
                70
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "extraArgs",
                "optional": false,
                "range": [
                  80,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              },
              "range": [
                73,
                90
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            31,
            92
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 31,
              "line": 1
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
            16,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              },
              "range": [
                24,
                29
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  26,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              20,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "range": [
          7,
          92
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
