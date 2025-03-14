__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    97,
    174
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          114,
          117
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        97,
        120
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
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          167,
          170
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        150,
        173
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 7
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
    28,
    79
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "range": [
          45,
          51
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
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
                "column": 37,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            },
            "range": [
              53,
              65
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  62,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 2
                  },
                  "start": {
                    "column": 34,
                    "line": 2
                  }
                }
              },
              "range": [
                55,
                65
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            }
          },
          "range": [
            52,
            65
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 2
          },
          "start": {
            "column": 38,
            "line": 2
          }
        },
        "range": [
          66,
          78
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              75,
              78
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 47,
                "line": 2
              }
            }
          },
          "range": [
            68,
            78
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 2
            },
            "start": {
              "column": 40,
              "line": 2
            }
          }
        }
      },
      "range": [
        28,
        79
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 51,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
