__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 524,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 152,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 150,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 14,
              "end": 150,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 150,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 42,
                    "end": 101,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 46,
                      "end": 65,
                      "left": {
                        "type": "CallExpression",
                        "start": 46,
                        "end": 59,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 46,
                          "end": 57,
                          "object": {
                            "type": "Identifier",
                            "start": 46,
                            "end": 50,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 57,
                            "name": "random",
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
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 62,
                        "end": 65,
                        "value": 0.5,
                        "raw": "0.5"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 67,
                      "end": 101,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 81,
                          "end": 91,
                          "argument": {
                            "type": "Literal",
                            "start": 88,
                            "end": 90,
                            "value": "",
                            "raw": "''"
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 18,
                  "end": 31,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 27,
                      "end": 31
                    }
                  ]
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
      "type": "ClassDeclaration",
      "start": 153,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 327,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 327,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 327,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 200,
                    "end": 259,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 204,
                      "end": 223,
                      "left": {
                        "type": "CallExpression",
                        "start": 204,
                        "end": 217,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 204,
                          "end": 215,
                          "object": {
                            "type": "Identifier",
                            "start": 204,
                            "end": 208,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "name": "random",
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
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 220,
                        "end": 223,
                        "value": 0.5,
                        "raw": "0.5"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 225,
                      "end": 259,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 239,
                          "end": 249,
                          "argument": {
                            "type": "Literal",
                            "start": 246,
                            "end": 248,
                            "value": "",
                            "raw": "''"
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 174,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 176,
                  "end": 189,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 185,
                      "end": 189
                    }
                  ]
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
      "type": "ClassDeclaration",
      "start": 330,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 337,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 338,
        "end": 524,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 488,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 488,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 488,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 362,
                    "end": 420,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 366,
                      "end": 385,
                      "left": {
                        "type": "CallExpression",
                        "start": 366,
                        "end": 379,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 366,
                          "end": 377,
                          "object": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 370,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 377,
                            "name": "random",
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
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 382,
                        "end": 385,
                        "value": 0.5,
                        "raw": "0.5"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 387,
                      "end": 420,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 401,
                          "end": 410,
                          "argument": {
                            "type": "Literal",
                            "start": 408,
                            "end": 409,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    "alternate": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 494,
            "end": 522,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 499,
              "end": 522,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 500,
                  "end": 513,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 505,
                    "end": 513,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 507,
                      "end": 513
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 515,
                "end": 522,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
