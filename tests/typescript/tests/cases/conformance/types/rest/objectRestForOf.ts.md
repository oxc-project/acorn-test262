__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 338,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 37,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 37,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 11,
                "end": 37,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 11,
                  "end": 35,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 13,
                      "end": 23,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 13,
                        "end": 14,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 14,
                        "end": 22,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 16,
                          "end": 22
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 24,
                      "end": 33,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 25,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 27,
                          "end": 33
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 39,
      "end": 95,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 64,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 64,
            "id": {
              "type": "ObjectPattern",
              "start": 48,
              "end": 64,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 50,
                  "end": 51,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 53,
                  "end": 62,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 62,
                    "decorators": [],
                    "name": "restOf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 68,
        "end": 73,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 81,
            "end": 93,
            "expression": {
              "type": "ArrayExpression",
              "start": 81,
              "end": 92,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 91,
                  "decorators": [],
                  "name": "restOf",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 111,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 110,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 140,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 139,
            "decorators": [],
            "name": "rrestOff",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 126,
                "end": 139,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 128,
                    "end": 137,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 131,
                        "end": 137
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 141,
      "end": 203,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 146,
        "end": 168,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 148,
            "end": 153,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Identifier",
              "start": 151,
              "end": 153,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 155,
            "end": 166,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 158,
              "end": 166,
              "decorators": [],
              "name": "rrestOff",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 172,
        "end": 177,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 203,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 201,
            "expression": {
              "type": "ArrayExpression",
              "start": 186,
              "end": 200,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 199,
                  "decorators": [],
                  "name": "rrestOff",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 204,
      "end": 338,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 209,
        "end": 221,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 215,
            "end": 221,
            "id": {
              "type": "Identifier",
              "start": 215,
              "end": 221,
              "decorators": [],
              "name": "norest",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 225,
        "end": 266,
        "callee": {
          "type": "MemberExpression",
          "start": 225,
          "end": 234,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 230,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 231,
            "end": 234,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 235,
            "end": 265,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 241,
              "end": 264,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 243,
                  "end": 247,
                  "argument": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 249,
                  "end": 262,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 252,
                    "end": 262,
                    "value": "a string",
                    "raw": "'a string'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 338,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 274,
            "end": 295,
            "expression": {
              "type": "ArrayExpression",
              "start": 274,
              "end": 294,
              "elements": [
                {
                  "type": "MemberExpression",
                  "start": 275,
                  "end": 283,
                  "object": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 281,
                    "decorators": [],
                    "name": "norest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                {
                  "type": "MemberExpression",
                  "start": 285,
                  "end": 293,
                  "object": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 291,
                    "decorators": [],
                    "name": "norest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 293,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ]
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
