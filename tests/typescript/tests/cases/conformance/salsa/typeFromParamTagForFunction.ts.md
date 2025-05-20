__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 35,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 29,
              "end": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 41,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 38,
          "end": 41
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 80,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 77,
                "end": 80
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 9,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 12,
          "end": 43,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 24,
            "end": 43,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 30,
                "end": 41,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 30,
                  "end": 40,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 30,
                    "end": 36,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 30,
                      "end": 34
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "raw": "1",
                    "value": 1
                  }
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
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 31,
                "raw": "\"./a-ext\"",
                "value": "./a-ext"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 77,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 71,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 68,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 67,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 9,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 12,
          "end": 67,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 18,
            "end": 67,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 24,
                "end": 65,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 35,
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
                  "start": 35,
                  "end": 65,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 65,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 48,
                        "end": 59,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 48,
                          "end": 58,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 48,
                            "end": 54,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 48,
                              "end": 52
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 53,
                              "end": 54,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 57,
                            "end": 58,
                            "raw": "1",
                            "value": 1
                          }
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
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 31,
                "raw": "\"./b-ext\"",
                "value": "./b-ext"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 77,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 71,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 39,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 26,
              "end": 37,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 26,
                "end": 36,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 26,
                  "end": 32,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 26,
                    "end": 30
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 31,
                "raw": "\"./c-ext\"",
                "value": "./c-ext"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 77,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 71,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 45,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 45,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 32,
                    "end": 43,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 32,
                      "end": 42,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 32,
                        "end": 38,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 32,
                          "end": 36
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 41,
                        "end": 42,
                        "raw": "1",
                        "value": 1
                      }
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
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 31,
                "raw": "\"./d-ext\"",
                "value": "./d-ext"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 77,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 71,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 64,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 64,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 62,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 32,
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
                "start": 32,
                "end": 62,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 35,
                  "end": 62,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 45,
                      "end": 56,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 45,
                        "end": 55,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 45,
                          "end": 51,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 45,
                            "end": 49
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 50,
                            "end": 51,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 54,
                          "end": 55,
                          "raw": "1",
                          "value": 1
                        }
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
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 31,
                "raw": "\"./e-ext\"",
                "value": "./e-ext"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 77,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 71,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 39,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 39,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 26,
                  "end": 37,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 26,
                    "end": 36,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 26,
                      "end": 32,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 26,
                        "end": 30
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 31,
                        "end": 32,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 35,
                      "end": 36,
                      "raw": "1",
                      "value": 1
                    }
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
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 62,
      "end": 84,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 84,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 82,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 78,
              "end": 81,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 19,
            "end": 30,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 19,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 19,
                "end": 25,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "raw": "1",
                "value": 1
              }
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
        "end": 10,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 76,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 70,
            "end": 74,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 70,
              "end": 73,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
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
              "start": 25,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 55,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 38,
                    "end": 49,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 38,
                      "end": 48,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 38,
                        "end": 44,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 38,
                          "end": 42
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 47,
                        "end": 48,
                        "raw": "1",
                        "value": 1
                      }
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
        "name": "H",
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
      "start": 79,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 99,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 95,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
