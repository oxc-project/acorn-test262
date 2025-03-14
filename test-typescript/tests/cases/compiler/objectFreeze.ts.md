__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 77,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 24,
                "end": 76,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 59,
                  "end": 76,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 61,
                      "end": 74,
                      "argument": {
                        "type": "Literal",
                        "start": 68,
                        "end": 73,
                        "raw": "false",
                        "value": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 36,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 46,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 57,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 23,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 10,
                "end": 16,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "decorators": [],
                "name": "freeze",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 98,
      "expression": {
        "type": "BinaryExpression",
        "start": 79,
        "end": 97,
        "operator": "===",
        "left": {
          "type": "CallExpression",
          "start": 79,
          "end": 87,
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 84,
              "end": 86,
              "raw": "\"\"",
              "value": ""
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 97,
          "raw": "false",
          "value": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 136,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 136,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  }
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
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 149,
            "end": 165,
            "arguments": [
              {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 149,
              "end": 162,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 155,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "decorators": [],
                "name": "freeze",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 176,
      "expression": {
        "type": "NewExpression",
        "start": 167,
        "end": 175,
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 174,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 188,
            "end": 212,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 202,
                "end": 211,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 203,
                    "end": 204,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 206,
                    "end": 207,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 209,
                    "end": 210,
                    "raw": "3",
                    "value": 3
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 188,
              "end": 201,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "decorators": [],
                "name": "freeze",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 214,
          "end": 218,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 216,
            "end": 217,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 221,
          "end": 236,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 221,
            "end": 234,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 221,
              "end": 225,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 223,
                "end": 224,
                "raw": "2",
                "value": 2
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 226,
              "end": 234,
              "decorators": [],
              "name": "toString",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 294,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 263,
                "end": 293,
                "properties": [
                  {
                    "type": "Property",
                    "start": 265,
                    "end": 269,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
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
                      "start": 268,
                      "end": 269,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 271,
                    "end": 282,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
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
                      "start": 274,
                      "end": 282,
                      "raw": "\"string\"",
                      "value": "string"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 284,
                    "end": 291,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
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
                      "start": 287,
                      "end": 291,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 249,
              "end": 262,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 249,
                "end": 255,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 262,
                "decorators": [],
                "name": "freeze",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 317,
      "expression": {
        "type": "AssignmentExpression",
        "start": 296,
        "end": 316,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 296,
          "end": 299,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 302,
          "end": 316,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 302,
            "end": 314,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 302,
              "end": 305,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 306,
              "end": 314,
              "decorators": [],
              "name": "toString",
              "optional": false
            }
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
