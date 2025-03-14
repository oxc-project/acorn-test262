__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 72,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 35,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 21,
                  "end": 35,
                  "expression": {
                    "type": "Literal",
                    "start": 21,
                    "end": 26,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 30,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 30,
                      "end": 35,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 41,
                "end": 56,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 44,
                  "end": 56,
                  "expression": {
                    "type": "Literal",
                    "start": 51,
                    "end": 56,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 45,
                    "end": 50,
                    "literal": {
                      "type": "Literal",
                      "start": 45,
                      "end": 50,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 62,
                "end": 70,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 70,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 81,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 84,
            "end": 96,
            "expression": {
              "type": "Literal",
              "start": 84,
              "end": 85,
              "raw": "1",
              "value": 1
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 90,
              "end": 95,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 90,
                  "end": 91,
                  "literal": {
                    "type": "Literal",
                    "start": 90,
                    "end": 91,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 94,
                  "end": 95,
                  "literal": {
                    "type": "Literal",
                    "start": 94,
                    "end": 95,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 104,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 143,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 115,
            "end": 128,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 117,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 117,
                  "end": 126,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 121,
                    "end": 126,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 131,
            "end": 143,
            "properties": [
              {
                "type": "Property",
                "start": 133,
                "end": 141,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 136,
                  "end": 141,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 186,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 149,
            "end": 171,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 169,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 151,
                  "end": 169,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "TSAsExpression",
                    "start": 155,
                    "end": 169,
                    "expression": {
                      "type": "Literal",
                      "start": 155,
                      "end": 160,
                      "raw": "\"foo\"",
                      "value": "foo"
                    },
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 164,
                      "end": 169,
                      "literal": {
                        "type": "Literal",
                        "start": 164,
                        "end": 169,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 174,
            "end": 186,
            "properties": [
              {
                "type": "Property",
                "start": 176,
                "end": 184,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 179,
                  "end": 184,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 229,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 192,
            "end": 205,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 194,
                "end": 203,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 194,
                  "end": 203,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 198,
                    "end": 203,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 208,
            "end": 229,
            "properties": [
              {
                "type": "Property",
                "start": 210,
                "end": 227,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 213,
                  "end": 227,
                  "expression": {
                    "type": "Literal",
                    "start": 213,
                    "end": 218,
                    "raw": "\"bar\"",
                    "value": "bar"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 222,
                    "end": 227,
                    "literal": {
                      "type": "Literal",
                      "start": 222,
                      "end": 227,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 281,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 235,
            "end": 257,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 237,
                "end": 255,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 237,
                  "end": 255,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "TSAsExpression",
                    "start": 241,
                    "end": 255,
                    "expression": {
                      "type": "Literal",
                      "start": 241,
                      "end": 246,
                      "raw": "\"foo\"",
                      "value": "foo"
                    },
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 250,
                      "end": 255,
                      "literal": {
                        "type": "Literal",
                        "start": 250,
                        "end": 255,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 260,
            "end": 281,
            "properties": [
              {
                "type": "Property",
                "start": 262,
                "end": 279,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 265,
                  "end": 279,
                  "expression": {
                    "type": "Literal",
                    "start": 265,
                    "end": 270,
                    "raw": "\"bar\"",
                    "value": "bar"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 274,
                    "end": 279,
                    "literal": {
                      "type": "Literal",
                      "start": 274,
                      "end": 279,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
