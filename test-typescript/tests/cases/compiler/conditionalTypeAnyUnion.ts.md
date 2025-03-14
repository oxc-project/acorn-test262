__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    150
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "range": [
          27,
          31
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSAnyKeyword",
          "range": [
            34,
            37
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "range": [
            46,
            52
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSStringKeyword",
          "range": [
            61,
            67
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 39,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSAnyKeyword",
          "range": [
            55,
            58
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        },
        "range": [
          34,
          67
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "range": [
        22,
        68
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithSpec",
        "optional": false,
        "range": [
          75,
          83
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            104,
            105
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 5
            },
            "start": {
              "column": 34,
              "line": 5
            }
          }
        },
        "range": [
          104,
          105
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 5
          },
          "start": {
            "column": 34,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          83,
          101
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                94,
                100
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
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                84,
                85
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              84,
              100
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        70,
        105
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "range": [
          112,
          113
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            124,
            130
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              },
              "range": [
                125,
                129
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithSpec",
          "optional": false,
          "range": [
            116,
            124
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 9,
              "line": 7
            }
          }
        },
        "range": [
          116,
          130
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "range": [
        107,
        130
      ],
      "loc": {
        "end": {
          "column": 23,
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
      "column": 43,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
