__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 145,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 22,
            "end": 143,
            "argument": {
              "type": "ClassExpression",
              "start": 29,
              "end": 143,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 38,
                "end": 143,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 48,
                    "end": 74,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 56,
                        "end": 65,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 57,
                          "end": 65,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 59,
                            "end": 65
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 83,
                    "end": 105,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 91,
                        "end": 100,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 103,
                        "end": 105,
                        "literal": {
                          "type": "Literal",
                          "start": 103,
                          "end": 105,
                          "raw": "42",
                          "value": 42
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 115,
                    "end": 137,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 118,
                      "end": 137,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 125,
                        "end": 137,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 127,
                            "end": 135,
                            "argument": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 135,
                              "decorators": [],
                              "name": "v",
                              "optional": false
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
                          "start": 119,
                          "end": 123,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 120,
                            "end": 123,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 122,
                              "end": 123,
                              "typeName": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 123,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
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
              "id": null,
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 34,
                "end": 37,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 35,
                    "end": 36,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
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
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 157,
            "end": 162,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "foo",
              "optional": false
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
      "start": 163,
      "end": 167,
      "expression": {
        "type": "MemberExpression",
        "start": 163,
        "end": 166,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 168,
          "end": 171,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 175,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 182,
      "expression": {
        "type": "MemberExpression",
        "start": 177,
        "end": 181,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 183,
          "end": 187,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "raw": "2",
            "value": 2
          }
        },
        "right": {
          "type": "Literal",
          "start": 190,
          "end": 192,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 205,
            "end": 220,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 210,
              "end": 218,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 211,
                  "end": 217
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 231,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 230,
        "arguments": [
          {
            "type": "Literal",
            "start": 228,
            "end": 229,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 227,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
