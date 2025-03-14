__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    240
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                40,
                43
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                32,
                39
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              22,
              43
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                73,
                94
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "range": [
                      83,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
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
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    },
                    "range": [
                      86,
                      91
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        88,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    83,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "range": [
                55,
                72
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              45,
              94
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          }
        ],
        "range": [
          19,
          96
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          15,
          18
        ],
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        96
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "name": "customTag",
            "optional": false,
            "range": [
              102,
              111
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"h1\"",
            "value": "h1",
            "range": [
              114,
              118
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            102,
            118
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        98,
        119
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [
          {
            "type": "JSXText",
            "range": [
              131,
              144
            ],
            "raw": " Hello World ",
            "value": " Hello World ",
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "customTag",
            "range": [
              146,
              155
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          "range": [
            144,
            156
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 9
            },
            "start": {
              "column": 24,
              "line": 9
            }
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "name": "customTag",
            "range": [
              121,
              130
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          },
          "selfClosing": false,
          "range": [
            120,
            131
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "range": [
          120,
          156
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        120,
        156
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 120,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
