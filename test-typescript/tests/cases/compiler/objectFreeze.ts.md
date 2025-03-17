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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 24,
                "end": 76,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 36,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 46,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 57,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          "optional": false,
          "typeArguments": null
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
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 136,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 174,
            "value": 1,
            "raw": "1"
          }
        ],
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 216,
            "end": 217,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 223,
                "end": 224,
                "value": 2,
                "raw": "2"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 226,
              "end": 234,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 262,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 271,
                    "end": 282,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 274,
                      "end": 282,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 284,
                    "end": 291,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 287,
                      "end": 291,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 306,
              "end": 314,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
