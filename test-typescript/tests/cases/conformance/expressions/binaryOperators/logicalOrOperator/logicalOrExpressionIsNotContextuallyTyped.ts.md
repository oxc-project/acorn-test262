__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    258,
    341
  ],
  "body": [
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                263,
                286
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 7
                        }
                      },
                      "range": [
                        267,
                        275
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          269,
                          275
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      266,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  },
                  "range": [
                    277,
                    286
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      280,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 22,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  265,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              262,
              286
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            262,
            286
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        258,
        287
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "r",
            "optional": false,
            "range": [
              307,
              308
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                311,
                312
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      324,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 10
                      },
                      "start": {
                        "column": 21,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toLowerCase",
                    "optional": false,
                    "range": [
                      326,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    324,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  324,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    318,
                    319
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
                }
              ],
              "range": [
                317,
                339
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "range": [
              311,
              340
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "range": [
            307,
            340
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        303,
        341
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 38,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 7
    }
  },
  "hashbang": null
}
```
