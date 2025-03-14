__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    34,
    107
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        34,
        107
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
          "name": "art",
          "optional": false,
          "range": [
            50,
            53
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              },
              "range": [
                59,
                64
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  61,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              54,
              64
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 2
                },
                "start": {
                  "column": 40,
                  "line": 2
                }
              },
              "range": [
                74,
                90
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      76,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 2
                      },
                      "start": {
                        "column": 42,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        85,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 2
                        },
                        "start": {
                          "column": 51,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      85,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 2
                      },
                      "start": {
                        "column": 51,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  76,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              66,
              90
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 2
              },
              "start": {
                "column": 32,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 72,
              "line": 2
            },
            "start": {
              "column": 57,
              "line": 2
            }
          },
          "range": [
            91,
            106
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": true,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                101,
                106
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 2
                },
                "start": {
                  "column": 67,
                  "line": 2
                }
              }
            },
            "typeAnnotation": null,
            "range": [
              93,
              106
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 2
              },
              "start": {
                "column": 59,
                "line": 2
              }
            }
          }
        },
        "range": [
          41,
          107
        ],
        "loc": {
          "end": {
            "column": 73,
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
          "column": 73,
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
      "column": 73,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 2
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "art",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            },
            "range": [
              26,
              31
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                28,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            },
            "range": [
              41,
              57
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    43,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 1
                    },
                    "start": {
                      "column": 43,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "range": [
                      52,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 1
                      },
                      "start": {
                        "column": 52,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    52,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 1
                    },
                    "start": {
                      "column": 52,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                43,
                57
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 43,
                  "line": 1
                }
              }
            }
          },
          "range": [
            33,
            57
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 73,
            "line": 1
          },
          "start": {
            "column": 58,
            "line": 1
          }
        },
        "range": [
          58,
          73
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              68,
              73
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 1
              },
              "start": {
                "column": 68,
                "line": 1
              }
            }
          },
          "typeAnnotation": null,
          "range": [
            60,
            73
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 1
            },
            "start": {
              "column": 60,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        74
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "art",
        "optional": false,
        "range": [
          84,
          87
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        75,
        88
      ],
      "loc": {
        "end": {
          "column": 13,
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
      "column": 13,
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
