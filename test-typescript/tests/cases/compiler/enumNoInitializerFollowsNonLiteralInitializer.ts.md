__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "raw": "\"./helpers\"",
        "value": "./helpers"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 120,
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 120,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 53,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 60,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 72,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 70,
              "end": 72,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 78,
            "end": 110,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "initializer": {
              "type": "TSAsExpression",
              "start": 82,
              "end": 110,
              "expression": {
                "type": "TSSatisfiesExpression",
                "start": 82,
                "end": 103,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 82,
                  "end": 86,
                  "expression": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 97,
                  "end": 103
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 107,
                "end": 110
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 116,
            "end": 117,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "raw": "\"./helpers\"",
        "value": "./helpers"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 67,
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 67,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 53,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 64,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 63,
              "end": 64,
              "raw": "3",
              "value": 3
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 68,
      "end": 100,
      "body": {
        "type": "TSEnumBody",
        "start": 75,
        "end": 100,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 81,
            "end": 90,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 85,
              "end": 90,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 85,
                "end": 86,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 96,
            "end": 97,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 101,
      "end": 130,
      "body": {
        "type": "TSEnumBody",
        "start": 108,
        "end": 130,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 114,
            "end": 120,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 118,
              "end": 120,
              "argument": {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "raw": "2",
                "value": 2
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 126,
            "end": 127,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 131,
      "end": 161,
      "body": {
        "type": "TSEnumBody",
        "start": 138,
        "end": 161,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 144,
            "end": 151,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 149,
              "end": 150,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSEnumMember",
            "start": 157,
            "end": 158,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 162,
      "end": 226,
      "body": {
        "type": "TSEnumBody",
        "start": 169,
        "end": 226,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 175,
            "end": 176,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 182,
            "end": 183,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 189,
            "end": 194,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 200,
            "end": 201,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "d",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 207,
            "end": 216,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 211,
              "end": 216,
              "operator": "|",
              "left": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 215,
                "end": 216,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 222,
            "end": 223,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 168,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
