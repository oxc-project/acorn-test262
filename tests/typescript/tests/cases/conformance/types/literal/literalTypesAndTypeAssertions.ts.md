__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 21,
                  "end": 35,
                  "expression": {
                    "type": "Literal",
                    "start": 21,
                    "end": 26,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 30,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 30,
                      "end": 35,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 41,
                "end": 56,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 44,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 45,
                    "end": 50,
                    "literal": {
                      "type": "Literal",
                      "start": 45,
                      "end": 50,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  "expression": {
                    "type": "Literal",
                    "start": 51,
                    "end": 56,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 62,
                "end": 70,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 65,
                  "end": 70,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 97,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 81,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 84,
            "end": 96,
            "expression": {
              "type": "Literal",
              "start": 84,
              "end": 85,
              "value": 1,
              "raw": "1"
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
                    "value": 0,
                    "raw": "0"
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
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 109,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 104,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 144,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 143,
          "id": {
            "type": "ObjectPattern",
            "start": 115,
            "end": 128,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 117,
                "end": 126,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 121,
                    "end": 126,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 136,
                  "end": 141,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 187,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 186,
          "id": {
            "type": "ObjectPattern",
            "start": 149,
            "end": 171,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 169,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 155,
                    "end": 169,
                    "expression": {
                      "type": "Literal",
                      "start": 155,
                      "end": 160,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 164,
                      "end": 169,
                      "literal": {
                        "type": "Literal",
                        "start": 164,
                        "end": 169,
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 179,
                  "end": 184,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 230,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 229,
          "id": {
            "type": "ObjectPattern",
            "start": 192,
            "end": 205,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 194,
                "end": 203,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 198,
                    "end": 203,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 213,
                  "end": 227,
                  "expression": {
                    "type": "Literal",
                    "start": 213,
                    "end": 218,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 222,
                    "end": 227,
                    "literal": {
                      "type": "Literal",
                      "start": 222,
                      "end": 227,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 282,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 281,
          "id": {
            "type": "ObjectPattern",
            "start": 235,
            "end": 257,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 237,
                "end": 255,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 241,
                    "end": 255,
                    "expression": {
                      "type": "Literal",
                      "start": 241,
                      "end": 246,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 250,
                      "end": 255,
                      "literal": {
                        "type": "Literal",
                        "start": 250,
                        "end": 255,
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 265,
                  "end": 279,
                  "expression": {
                    "type": "Literal",
                    "start": 265,
                    "end": 270,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 274,
                    "end": 279,
                    "literal": {
                      "type": "Literal",
                      "start": 274,
                      "end": 279,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
