__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 15,
            "end": 17,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 34,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 19,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 19,
          "end": 29,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 27,
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 32,
          "end": 33,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 67,
              "decorators": [],
              "name": "initializedMember",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 70,
              "end": 72,
              "properties": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
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
              "start": 89,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 152,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 119,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 118,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 113,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 113,
                          "decorators": [],
                          "name": "member",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 116,
                        "end": 118,
                        "properties": []
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 146,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 145,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 141,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 128,
                          "end": 139,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 139,
                            "decorators": [],
                            "name": "member",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 144,
                        "end": 145,
                        "raw": "0",
                        "value": 0
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
        "start": 42,
        "end": 43,
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
      "start": 156,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 163,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 166,
            "end": 186,
            "properties": [
              {
                "type": "Property",
                "start": 172,
                "end": 184,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 180,
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 182,
                  "end": 184,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 208,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 207,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 203,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 189,
            "end": 201,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 193,
              "end": 201,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 206,
          "end": 207,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 217,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 220,
            "end": 224,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 221,
                "end": 223,
                "properties": []
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 263,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 245,
        "end": 263,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 251,
            "end": 261,
            "argument": {
              "type": "ObjectExpression",
              "start": 258,
              "end": 260,
              "properties": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 242,
        "decorators": [],
        "name": "getObj",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
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
  "end": 125,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 15,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 14,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 10,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 8,
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 13,
          "end": 14,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 39,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 38,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 34,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 16,
            "end": 32,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 17,
              "end": 24,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 26,
              "end": 32,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 37,
          "end": 38,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 73,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 40,
          "end": 69,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 40,
            "end": 67,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 41,
              "end": 48,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 67,
              "decorators": [],
              "name": "initializedMember",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 72,
          "end": 73,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 93,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 89,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 75,
            "end": 87,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 79,
              "end": 87,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 93,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 103,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 95,
            "end": 101,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 99,
              "end": 100,
              "raw": "0",
              "value": 0
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 107,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 124,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 109,
        "end": 123,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 109,
          "end": 119,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 109,
            "end": 117,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 109,
              "end": 115,
              "decorators": [],
              "name": "getObj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 122,
          "end": 123,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
