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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "getNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 22,
          "end": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 60,
        "name": "Example",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 76,
              "name": "getNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 112,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 78,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 80,
                  "end": 86
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 186,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 128,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 186,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 129,
                  "end": 149,
                  "left": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 133,
                    "end": 149,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 133,
                      "end": 147,
                      "object": {
                        "type": "ThisExpression",
                        "start": 133,
                        "end": 137
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 147,
                        "name": "getNumber",
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
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 203,
        "name": "weird",
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
          "start": 204,
          "end": 217,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 217,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 217,
                "name": "Example",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 219,
          "end": 239,
          "left": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 223,
            "end": 239,
            "callee": {
              "type": "MemberExpression",
              "start": 223,
              "end": 237,
              "object": {
                "type": "ThisExpression",
                "start": 223,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 237,
                "name": "getNumber",
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
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 259,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 270,
        "name": "Weird",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 271,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 288,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 288,
              "end": 351,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 289,
                  "end": 302,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 295,
                      "end": 302,
                      "typeName": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 302,
                        "name": "Example",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 304,
                  "end": 324,
                  "left": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 308,
                    "end": 324,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 308,
                      "end": 322,
                      "object": {
                        "type": "ThisExpression",
                        "start": 308,
                        "end": 312
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 322,
                        "name": "getNumber",
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
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
