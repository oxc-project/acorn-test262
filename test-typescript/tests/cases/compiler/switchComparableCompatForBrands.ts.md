__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    172
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          41
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_a",
              "optional": false,
              "range": [
                28,
                30
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
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
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                30,
                38
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  32,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              20,
              39
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
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
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyBrand",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        41
      ],
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        147,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      140,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    127,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  122,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "strInput",
              "optional": false,
              "range": [
                98,
                106
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              91,
              155
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                167,
                168
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              160,
              169
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          85,
          171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 42,
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
        "name": "test",
        "optional": false,
        "range": [
          52,
          56
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "strInput",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 22,
                "line": 6
              }
            },
            "range": [
              65,
              83
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    67,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyBrand",
                    "optional": false,
                    "range": [
                      76,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 33,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    76,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 33,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                67,
                83
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            }
          },
          "range": [
            57,
            83
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        }
      ],
      "range": [
        43,
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
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
