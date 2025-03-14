__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    114
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          54
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                19,
                22
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                22,
                52
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        46,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      39,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                  33,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                },
                "range": [
                  24,
                  32
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    26,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              12,
              52
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          74,
          114
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                78,
                89
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                89,
                112
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  107,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      90,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "range": [
                          94,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 18,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          100,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 24,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        94,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 18,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      94,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    90,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              78,
              112
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 18,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          62,
          63
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          72,
          73
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "range": [
        56,
        114
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
