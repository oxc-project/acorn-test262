equalityWithEnumTypes.ts
```json
{
  "type": "Program",
  "start": 21,
  "end": 476,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 54,
      "body": {
        "type": "TSEnumBody",
        "start": 29,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 40,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 51,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 28,
        "decorators": [],
        "name": "E1",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 77,
      "end": 119,
      "body": {
        "type": "TSEnumBody",
        "start": 85,
        "end": 119,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 101,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 95,
              "end": 101,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 95,
                "end": 96,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 107,
            "end": 117,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 111,
              "end": 117,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 111,
                "end": 112,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 121,
      "end": 307,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 140,
        "end": 307,
        "body": [
          {
            "type": "IfStatement",
            "start": 146,
            "end": 187,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 159,
              "end": 187,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 179,
                  "end": 181,
                  "expression": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 150,
              "end": 157,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 156,
                "end": 157,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 192,
            "end": 223,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 205,
              "end": 223,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 217,
                  "expression": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 196,
              "end": 203,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 202,
                "end": 203,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 228,
            "end": 259,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 241,
              "end": 259,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 251,
                  "end": 253,
                  "expression": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 232,
              "end": 239,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 239,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 264,
            "end": 305,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 277,
              "end": 305,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 297,
                  "end": 299,
                  "expression": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 268,
              "end": 275,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "raw": "3",
                "value": 3
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 132,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 133,
          "end": 138,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 138,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 138,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "E1",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 475,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 328,
        "end": 475,
        "body": [
          {
            "type": "IfStatement",
            "start": 334,
            "end": 365,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 347,
              "end": 365,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 359,
                  "expression": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 358,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 338,
              "end": 345,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 344,
                "end": 345,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 370,
            "end": 401,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 383,
              "end": 401,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 393,
                  "end": 395,
                  "expression": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 374,
              "end": 381,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 380,
                "end": 381,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 406,
            "end": 437,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 419,
              "end": 437,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 429,
                  "end": 431,
                  "expression": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 410,
              "end": 417,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 416,
                "end": 417,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 442,
            "end": 473,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 455,
              "end": 473,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 465,
                  "end": 467,
                  "expression": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 466,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 446,
              "end": 453,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 452,
                "end": 453,
                "raw": "3",
                "value": 3
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 326,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 326,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 326,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 326,
                "decorators": [],
                "name": "E2",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
