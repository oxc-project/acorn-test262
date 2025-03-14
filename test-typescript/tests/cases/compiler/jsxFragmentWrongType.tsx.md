__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    104,
    241
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
            "name": "test",
            "optional": false,
            "range": [
              110,
              114
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "\"asd\"",
              "value": "asd",
              "range": [
                123,
                128
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              117,
              128
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          "range": [
            110,
            128
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        104,
        129
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "jsxWithJsxFragment",
            "optional": false,
            "range": [
              137,
              155
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "JSXFragment",
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    161,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 6
                    }
                  }
                },
                "range": [
                  160,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "range": [
                166,
                169
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
                }
              }
            },
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "range": [
                158,
                160
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "range": [
              158,
              169
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          "range": [
            137,
            169
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        131,
        170
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "jsxWithReactFragment",
            "optional": false,
            "range": [
              177,
              197
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    217,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 7
                    },
                    "start": {
                      "column": 46,
                      "line": 7
                    }
                  }
                },
                "range": [
                  216,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 45,
                    "line": 7
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "React",
                  "range": [
                    224,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 7
                    },
                    "start": {
                      "column": 53,
                      "line": 7
                    }
                  }
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Fragment",
                  "range": [
                    230,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 7
                    },
                    "start": {
                      "column": 59,
                      "line": 7
                    }
                  }
                },
                "range": [
                  224,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 7
                  },
                  "start": {
                    "column": 53,
                    "line": 7
                  }
                }
              },
              "range": [
                222,
                239
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 7
                },
                "start": {
                  "column": 51,
                  "line": 7
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "React",
                  "range": [
                    201,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Fragment",
                  "range": [
                    207,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                },
                "range": [
                  201,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 7
                  },
                  "start": {
                    "column": 30,
                    "line": 7
                  }
                }
              },
              "selfClosing": false,
              "range": [
                200,
                216
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "range": [
              200,
              239
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          },
          "range": [
            177,
            239
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        171,
        240
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
