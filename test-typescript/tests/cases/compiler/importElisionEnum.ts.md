__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    46
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        45
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            19,
            45
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
                  }
                }
              },
              "initializer": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                28
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              },
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  37,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              },
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  42,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              },
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 5
                },
                "start": {
                  "column": 2,
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
              "column": 19,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyEnum",
          "optional": false,
          "range": [
            12,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "range": [
          7,
          45
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
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
          "column": 1,
          "line": 6
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
      "line": 7
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
    94
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./enum\"",
        "value": "./enum",
        "range": [
          43,
          51
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 1
          },
          "start": {
            "column": 43,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyEnum",
            "optional": false,
            "range": [
              9,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyEnumFromModule",
            "optional": false,
            "range": [
              19,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          "range": [
            9,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        52
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          66,
          94
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "initializer": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnumFromModule",
                "optional": false,
                "range": [
                  74,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  91,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              },
              "range": [
                74,
                92
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
            },
            "range": [
              70,
              92
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
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
            "column": 12,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "range": [
          59,
          65
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "range": [
        54,
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
      "column": 1,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
