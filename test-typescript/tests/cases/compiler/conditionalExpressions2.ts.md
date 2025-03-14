conditionalExpressions2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 8,
            "end": 24,
            "alternate": {
              "type": "Literal",
              "start": 20,
              "end": 24,
              "raw": "null",
              "value": null
            },
            "consequent": {
              "type": "Literal",
              "start": 16,
              "end": 17,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "Literal",
              "start": 8,
              "end": 13,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 34,
            "end": 55,
            "alternate": {
              "type": "Literal",
              "start": 54,
              "end": 55,
              "raw": "0",
              "value": 0
            },
            "consequent": {
              "type": "Identifier",
              "start": 42,
              "end": 51,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 34,
              "end": 39,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 65,
            "end": 78,
            "alternate": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "0",
              "value": 0
            },
            "consequent": {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "Literal",
              "start": 65,
              "end": 70,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 88,
            "end": 108,
            "alternate": {
              "type": "Literal",
              "start": 104,
              "end": 108,
              "raw": "true",
              "value": true
            },
            "consequent": {
              "type": "Literal",
              "start": 96,
              "end": 101,
              "raw": "false",
              "value": false
            },
            "test": {
              "type": "Literal",
              "start": 88,
              "end": 93,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 118,
            "end": 139,
            "alternate": {
              "type": "Literal",
              "start": 134,
              "end": 139,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "consequent": {
              "type": "Literal",
              "start": 126,
              "end": 131,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "test": {
              "type": "Literal",
              "start": 118,
              "end": 123,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 149,
            "end": 173,
            "alternate": {
              "type": "Identifier",
              "start": 164,
              "end": 173,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "consequent": {
              "type": "Literal",
              "start": 157,
              "end": 161,
              "raw": "null",
              "value": null
            },
            "test": {
              "type": "Literal",
              "start": 149,
              "end": 154,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 183,
            "end": 202,
            "alternate": {
              "type": "Literal",
              "start": 198,
              "end": 202,
              "raw": "null",
              "value": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 190,
              "end": 195,
              "properties": [
                {
                  "type": "Property",
                  "start": 191,
                  "end": 194,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 194,
                    "raw": "5",
                    "value": 5
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 183,
              "end": 187,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 212,
            "end": 225,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 213,
                "end": 218,
                "properties": [
                  {
                    "type": "Property",
                    "start": 214,
                    "end": 217,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "decorators": [],
                      "name": "h",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 216,
                      "end": 217,
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 220,
                "end": 224,
                "raw": "null",
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 296,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 296,
        "body": [
          {
            "type": "IfStatement",
            "start": 242,
            "end": 294,
            "alternate": {
              "type": "BlockStatement",
              "start": 278,
              "end": 294,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 280,
                  "end": 292,
                  "argument": {
                    "type": "Literal",
                    "start": 287,
                    "end": 291,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 252,
              "end": 272,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 254,
                  "end": 270,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 261,
                    "end": 269,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 263,
                        "end": 267,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 266,
                          "end": 267,
                          "raw": "5",
                          "value": 5
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 246,
              "end": 250,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
