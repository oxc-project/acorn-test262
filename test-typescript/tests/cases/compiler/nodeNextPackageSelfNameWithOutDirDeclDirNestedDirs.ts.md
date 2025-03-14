__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    49
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./src/thing.js\"",
        "value": "./src/thing.js",
        "range": [
          32,
          48
        ],
        "loc": {
          "end": {
            "column": 48,
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
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "range": [
              20,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "srcthing",
            "optional": false,
            "range": [
              8,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        49
      ],
      "loc": {
        "end": {
          "column": 49,
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
      "column": 49,
      "line": 1
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
    391,
    479
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"@this/package\"",
        "value": "@this/package",
        "range": [
          411,
          426
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 8
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "range": [
              403,
              405
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "range": [
            398,
            405
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 7,
              "line": 8
            }
          }
        }
      ],
      "range": [
        391,
        427
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "range": [
              429,
              431
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "range": [
              432,
              437
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          },
          "range": [
            429,
            437
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          429,
          439
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        429,
        440
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        442,
        477
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            475,
            477
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 12
            },
            "start": {
              "column": 33,
              "line": 12
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "srcthing",
          "optional": false,
          "range": [
            458,
            466
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 32,
              "line": 12
            },
            "start": {
              "column": 26,
              "line": 12
            }
          },
          "range": [
            468,
            474
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              470,
              474
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            }
          }
        },
        "range": [
          449,
          477
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 8
    }
  },
  "hashbang": null
}
```
