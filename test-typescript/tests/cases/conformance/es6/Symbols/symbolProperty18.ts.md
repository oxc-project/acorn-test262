__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 124,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 34,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 15,
                  "end": 30,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 30,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 40,
                "end": 76,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 41,
                  "end": 59,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 47,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 59,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 60,
                  "end": 76,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 63,
                    "end": 76,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 65,
                        "end": 74,
                        "argument": {
                          "type": "Literal",
                          "start": 72,
                          "end": 74,
                          "raw": "\"\"",
                          "value": "",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 82,
                "end": 122,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 87,
                  "end": 105,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 93,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 105,
                    "decorators": [],
                    "name": "toPrimitive",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 106,
                  "end": 122,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 119,
                    "end": 122,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 107,
                      "end": 117,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 108,
                        "end": 117,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 110,
                          "end": 117
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 126,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 153,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 137,
              "end": 152,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 152,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 162,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 165,
            "end": 188,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 165,
              "end": 186,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 167,
                "end": 185,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 173,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 185,
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 220,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 219,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 190,
          "end": 211,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 192,
            "end": 210,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 198,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 199,
              "end": 210,
              "decorators": [],
              "name": "toPrimitive",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 214,
          "end": 219,
          "raw": "false",
          "value": false,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
