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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "decorators": [],
              "id": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 34,
                "end": 37,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 35,
                    "end": 36,
                    "name": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      }
                    },
                    "readonly": false,
                    "static": true,
                    "accessibility": null
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
                          "value": 42,
                          "raw": "42"
                        }
                      }
                    },
                    "readonly": false,
                    "static": true,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 115,
                    "end": 137,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 118,
                      "end": 137,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                              "optional": false,
                              "typeAnnotation": null
                            }
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
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 162,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 157,
            "end": 162,
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 167,
      "expression": {
        "type": "MemberExpression",
        "start": 163,
        "end": 166,
        "object": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 175,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 182,
      "expression": {
        "type": "MemberExpression",
        "start": 177,
        "end": 181,
        "object": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "value": 2,
          "raw": "2"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "value": 2,
            "raw": "2"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 190,
          "end": 192,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 221,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 205,
            "end": 220,
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 231,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 230,
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 227,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 228,
            "end": 229,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
