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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 152,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 14,
              "end": 150,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
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
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 57,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
              "expression": false
            },
            "kind": "method",
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
      "type": "ClassDeclaration",
      "start": 153,
      "end": 329,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 327,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 327,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
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
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
              "expression": false
            },
            "kind": "get",
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
      "type": "ClassDeclaration",
      "start": 330,
      "end": 524,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 337,
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
        "start": 338,
        "end": 524,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 488,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 488,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 377,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 494,
            "end": 522,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 499,
              "end": 522,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 500,
                  "end": 513,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 505,
                    "end": 513,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 507,
                      "end": 513
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 515,
                "end": 522,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
