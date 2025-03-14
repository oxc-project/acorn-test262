__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 263,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 56,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrayExpression",
              "start": 45,
              "end": 55,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 46,
                  "end": 54,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 48,
                      "end": 52,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
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
                        "start": 51,
                        "end": 52,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 72,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 110,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 75,
          "end": 89,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 76,
              "end": 88,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 78,
                  "end": 86,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 81,
                    "end": 86,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 83,
                        "end": 84,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 92,
          "end": 108,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 93,
              "end": 107,
              "properties": [
                {
                  "type": "Property",
                  "start": 95,
                  "end": 105,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "NewExpression",
                    "start": 98,
                    "end": 105,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 138,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 112,
          "end": 128,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 114,
              "end": 127,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrayPattern",
                "start": 117,
                "end": 127,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 118,
                    "end": 126,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 120,
                        "end": 124,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 121,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "NewExpression",
          "start": 131,
          "end": 138,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "nameX",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 156,
            "end": 159,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 206,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 204,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 162,
          "end": 185,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 163,
              "end": 184,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 165,
                  "end": 182,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 168,
                    "end": 182,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 170,
                        "end": 180,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 176,
                          "decorators": [],
                          "name": "nameX",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 188,
          "end": 204,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 189,
              "end": 203,
              "properties": [
                {
                  "type": "Property",
                  "start": 191,
                  "end": 201,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "NewExpression",
                    "start": 194,
                    "end": 201,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "decorators": [],
            "name": "nameO",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 222,
            "end": 225,
            "raw": "\"o\"",
            "value": "o"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 262,
      "expression": {
        "type": "AssignmentExpression",
        "start": 228,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 228,
          "end": 250,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 230,
              "end": 249,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "nameO",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrayPattern",
                "start": 239,
                "end": 249,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 240,
                    "end": 248,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 242,
                        "end": 246,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 246,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "NewExpression",
          "start": 253,
          "end": 260,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
