__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 317,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 78,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 77,
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 23,
              "object": {
                "type": "Identifier",
                "start": 10,
                "end": 16,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 24,
                "end": 76,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 36,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                ],
                "returnType": null,
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
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 98,
      "expression": {
        "type": "BinaryExpression",
        "start": 79,
        "end": 97,
        "left": {
          "type": "CallExpression",
          "start": 79,
          "end": 87,
          "callee": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 84,
              "end": 86,
              "value": "",
              "raw": "\"\""
            }
          ],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 97,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 138,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 136,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 136,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 166,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 149,
            "end": 165,
            "callee": {
              "type": "MemberExpression",
              "start": 149,
              "end": 162,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 155,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 176,
      "expression": {
        "type": "NewExpression",
        "start": 167,
        "end": 175,
        "callee": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 174,
            "value": 1,
            "raw": "1"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 213,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 188,
            "end": 212,
            "callee": {
              "type": "MemberExpression",
              "start": 188,
              "end": 201,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 206,
                    "end": 207,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 209,
                    "end": 210,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 216,
            "end": 217,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "CallExpression",
          "start": 221,
          "end": 236,
          "callee": {
            "type": "MemberExpression",
            "start": 221,
            "end": 234,
            "object": {
              "type": "MemberExpression",
              "start": 221,
              "end": 225,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 223,
                "end": 224,
                "value": 2,
                "raw": "2"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Identifier",
              "start": 226,
              "end": 234,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 295,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 294,
            "callee": {
              "type": "MemberExpression",
              "start": 249,
              "end": 262,
              "object": {
                "type": "Identifier",
                "start": 249,
                "end": 255,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 262,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 271,
                    "end": 282,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 274,
                      "end": 282,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 284,
                    "end": 291,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 287,
                      "end": 291,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "CallExpression",
          "start": 302,
          "end": 316,
          "callee": {
            "type": "MemberExpression",
            "start": 302,
            "end": 314,
            "object": {
              "type": "MemberExpression",
              "start": 302,
              "end": 305,
              "object": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 306,
              "end": 314,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
