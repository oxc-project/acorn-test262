__ESTREE_TEST__:FAIL:
```json
'#!' can only be used at the start of a file.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    19,
    94
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          19,
          31
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        19,
        31
      ],
      "loc": {
        "end": {
          "column": 12,
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
      "directive": "Another prologue",
      "expression": {
        "type": "Literal",
        "raw": "\"Another prologue\"",
        "value": "Another prologue",
        "range": [
          32,
          50
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        32,
        50
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          62,
          64
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dood",
        "optional": false,
        "range": [
          57,
          61
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
      "implements": [],
      "superClass": null,
      "range": [
        51,
        64
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          92,
          94
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 27,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scoobyd",
        "optional": false,
        "range": [
          71,
          78
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dood",
        "optional": false,
        "range": [
          87,
          91
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 5
          }
        }
      },
      "range": [
        65,
        94
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 29,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
