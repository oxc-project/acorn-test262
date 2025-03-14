__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    138,
    255
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          146,
          206
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
              "name": "foo",
              "optional": false,
              "range": [
                160,
                163
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
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
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                163,
                171
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  165,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              152,
              172
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
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
              "name": "bar",
              "optional": false,
              "range": [
                192,
                195
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              },
              "range": [
                195,
                203
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  197,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              }
            },
            "value": null,
            "range": [
              177,
              204
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 3
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
          144,
          145
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        138,
        206
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              223,
              244
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      234,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        238,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        240,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      238,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    234,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                230,
                244
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          217,
          255
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          215,
          216
        ],
        "decorators": [],
        "name": "C",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "kind": "module",
      "range": [
        208,
        255
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
      "line": 3
    }
  },
  "hashbang": null
}
```
