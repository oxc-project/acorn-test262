__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    36
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        35
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
          "name": "toString",
          "optional": false,
          "range": [
            16,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          },
          "range": [
            26,
            34
          ],
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              28,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
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
          7,
          35
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 1
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
          "column": 35,
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
    170
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'mdast-util-to-string'",
        "value": "mdast-util-to-string",
        "range": [
          32,
          54
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 1
          },
          "start": {
            "column": 32,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            12
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mdast",
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
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "range": [
              16,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "range": [
              16,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            16,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        55
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mdast",
        "optional": false,
        "range": [
          56,
          61
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        56,
        62
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mdast",
            "optional": false,
            "range": [
              63,
              68
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "range": [
              69,
              77
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "range": [
            63,
            77
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          63,
          79
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        63,
        80
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "mdast2",
            "optional": false,
            "range": [
              88,
              94
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "'mdast-util-to-string'",
                "value": "mdast-util-to-string",
                "range": [
                  110,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
                  }
                }
              },
              "range": [
                103,
                133
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              133
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "range": [
            88,
            133
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        82,
        134
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mdast2",
            "optional": false,
            "range": [
              135,
              141
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "range": [
              142,
              150
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            }
          },
          "range": [
            135,
            150
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          135,
          152
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        135,
        153
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mdast2",
          "optional": false,
          "range": [
            154,
            160
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            161,
            168
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 7
            },
            "start": {
              "column": 7,
              "line": 7
            }
          }
        },
        "range": [
          154,
          168
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        154,
        169
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
