__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 354,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 46,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 35,
            "end": 44,
            "argument": {
              "type": "Literal",
              "start": 42,
              "end": 43,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "getNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 22,
          "end": 28
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 188,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 76,
              "decorators": [],
              "name": "getNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 112,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 106,
                    "argument": {
                      "type": "Literal",
                      "start": 104,
                      "end": 105,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 78,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 80,
                  "end": 86
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 128,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 186,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 171,
                    "end": 180,
                    "argument": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 129,
                  "end": 149,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 133,
                    "end": 149,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 133,
                      "end": 147,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 133,
                        "end": 137
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 147,
                        "decorators": [],
                        "name": "getNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 152,
                  "end": 160,
                  "exprName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 60,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 258,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 247,
            "end": 256,
            "argument": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 203,
        "decorators": [],
        "name": "weird",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 204,
          "end": 217,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 217,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 217,
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 219,
          "end": 239,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 223,
            "end": 239,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 223,
              "end": 237,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 223,
                "end": 227
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 237,
                "decorators": [],
                "name": "getNumber",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 259,
      "end": 353,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 271,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 351,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 288,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 288,
              "end": 351,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 351,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 336,
                    "end": 345,
                    "argument": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 289,
                  "end": 302,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 295,
                      "end": 302,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 302,
                        "decorators": [],
                        "name": "Example",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 304,
                  "end": 324,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 308,
                    "end": 324,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 308,
                      "end": 322,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 308,
                        "end": 312
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 322,
                        "decorators": [],
                        "name": "getNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 270,
        "decorators": [],
        "name": "Weird",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
