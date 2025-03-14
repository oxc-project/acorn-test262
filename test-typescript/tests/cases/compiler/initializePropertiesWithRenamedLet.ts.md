initializePropertiesWithRenamedLet.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 7,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 6,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "x0",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 8,
      "end": 83,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 18,
        "end": 83,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 30,
                  "decorators": [],
                  "name": "x0",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 36,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 40,
                "end": 57,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "decorators": [],
                  "name": "obj1",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 47,
                  "end": 57,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 49,
                      "end": 55,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 51,
                        "decorators": [],
                        "name": "x0",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 55,
                        "decorators": [],
                        "name": "x0",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 81,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 80,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 71,
                  "decorators": [],
                  "name": "obj2",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 74,
                  "end": 80,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 76,
                      "end": 78,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 78,
                        "decorators": [],
                        "name": "x0",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 78,
                        "decorators": [],
                        "name": "x0",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 12,
        "end": 16,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 98,
      "end": 228,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 108,
        "end": 228,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 138,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 137,
                "definite": false,
                "id": {
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
                        "name": "x",
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
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 129,
                  "end": 137,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 131,
                      "end": 135,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
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
                        "start": 134,
                        "end": 135,
                        "raw": "0",
                        "value": 0
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
            "start": 143,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 147,
                "end": 163,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 147,
                  "end": 152,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 149,
                      "end": 150,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 155,
                  "end": 163,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 161,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 158,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 160,
                        "end": 161,
                        "raw": "0",
                        "value": 0
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
            "start": 169,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 174,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 202,
            "expression": {
              "type": "AssignmentExpression",
              "start": 181,
              "end": 200,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 181,
                "end": 189,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 183,
                    "end": 187,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                ]
              },
              "right": {
                "type": "ObjectExpression",
                "start": 192,
                "end": 200,
                "properties": [
                  {
                    "type": "Property",
                    "start": 194,
                    "end": 198,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 197,
                      "end": 198,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 226,
            "expression": {
              "type": "AssignmentExpression",
              "start": 208,
              "end": 224,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 208,
                "end": 213,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 210,
                    "end": 211,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                ]
              },
              "right": {
                "type": "ObjectExpression",
                "start": 216,
                "end": 224,
                "properties": [
                  {
                    "type": "Property",
                    "start": 218,
                    "end": 222,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 221,
                      "end": 222,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 102,
        "end": 106,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script"
}
```
