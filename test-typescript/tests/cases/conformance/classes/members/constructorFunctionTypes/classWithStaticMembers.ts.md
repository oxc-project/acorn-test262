__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 317,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 183,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 183,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 42,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 42,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 42,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 28,
                    "end": 40,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 35,
                      "end": 39
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
            "type": "MethodDefinition",
            "start": 47,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 75,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 73,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 72,
                      "raw": "1",
                      "value": 1,
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
            "type": "MethodDefinition",
            "start": 80,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 99,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 156,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 156,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 116,
                  "end": 132,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 132,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 132,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 134,
                  "end": 151,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 151,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 145,
                        "end": 151
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 161,
            "end": 180,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 173,
                "end": 179
              }
            },
            "value": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 193,
            "end": 199,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 193,
              "end": 197,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 197,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 201,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 210,
            "end": 213,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 221,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 224,
            "end": 229,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 232,
      "end": 270,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 270,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 268,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 267,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 239,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 286,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 280,
              "end": 284,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 282,
                "end": 284,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 288,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 297,
            "end": 300,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 311,
            "end": 316,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 313,
              "end": 316,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
