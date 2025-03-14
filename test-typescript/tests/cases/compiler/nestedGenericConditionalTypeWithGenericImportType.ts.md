__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    38
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        11,
        37
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Name",
          "optional": false,
          "range": [
            23,
            27
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            33,
            36
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 3
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          },
          "range": [
            27,
            30
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
                  28,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                28,
                29
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          18,
          37
        ],
        "loc": {
          "end": {
            "column": 26,
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
          "column": 26,
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
      "line": 3
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
    121
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "range": [
            12,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSConditionalType",
            "checkType": {
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
            },
            "extendsType": {
              "type": "TSAnyKeyword",
              "range": [
                38,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            },
            "falseType": {
              "type": "TSStringKeyword",
              "range": [
                50,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            },
            "trueType": {
              "type": "TSAnyKeyword",
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
            "range": [
              26,
              56
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "range": [
              66,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 66,
                "line": 1
              }
            }
          },
          "falseType": {
            "type": "TSAnyKeyword",
            "range": [
              99,
              102
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 1
              },
              "start": {
                "column": 99,
                "line": 1
              }
            }
          },
          "trueType": {
            "type": "TSImportType",
            "range": [
              72,
              96
            ],
            "argument": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"./name\"",
                "value": "./name",
                "range": [
                  79,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 1
                  },
                  "start": {
                    "column": 79,
                    "line": 1
                  }
                }
              },
              "range": [
                79,
                87
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 1
                },
                "start": {
                  "column": 79,
                  "line": 1
                }
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "range": [
                89,
                93
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 1
                },
                "start": {
                  "column": 89,
                  "line": 1
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                93,
                96
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      94,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 1
                      },
                      "start": {
                        "column": 94,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    94,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 1
                    },
                    "start": {
                      "column": 94,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 1
                },
                "start": {
                  "column": 93,
                  "line": 1
                }
              }
            },
            "loc": {
              "end": {
                "column": 96,
                "line": 1
              },
              "start": {
                "column": 72,
                "line": 1
              }
            }
          },
          "range": [
            25,
            102
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "range": [
            116,
            119
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSAnyKeyword",
          "range": [
            108,
            111
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
        "range": [
          12,
          119
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        },
        "range": [
          6,
          9
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                7,
                8
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              7,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        120
      ],
      "loc": {
        "end": {
          "column": 8,
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
