__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    182
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
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
            "name": "Foo",
            "optional": false,
            "range": [
              40,
              43
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                62,
                71
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  },
                  "range": [
                    52,
                    57
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      54,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  47,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              46,
              71
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            40,
            71
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        34,
        72
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                118,
                127
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              111,
              128
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 5
              }
            }
          }
        ],
        "range": [
          108,
          130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 35,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greet",
        "optional": false,
        "range": [
          82,
          87
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            },
            "range": [
              89,
              106
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      92,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    },
                    "range": [
                      97,
                      105
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        99,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    92,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                91,
                106
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            }
          },
          "range": [
            88,
            106
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 15,
              "line": 4
            }
          }
        }
      ],
      "range": [
        73,
        130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "name": "foo",
            "optional": false,
            "range": [
              147,
              150
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                153,
                160
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  154,
                  157
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
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "range": [
              153,
              160
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            147,
            160
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        141,
        161
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "G",
            "optional": false,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                172,
                181
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "range": [
                  173,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "range": [
              172,
              181
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            168,
            181
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        162,
        182
      ],
      "loc": {
        "end": {
          "column": 20,
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
      "column": 20,
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
