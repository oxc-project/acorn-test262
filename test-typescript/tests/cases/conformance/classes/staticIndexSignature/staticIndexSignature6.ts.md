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
        "name": "foo",
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
              "id": null,
              "superClass": null,
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
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 57,
                          "end": 65,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 59,
                            "end": 65
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 118,
                      "end": 137,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 119,
                          "end": 123,
                          "name": "v",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "name": "v",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 157,
            "end": 162,
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "value": 2,
          "raw": "2"
        },
        "computed": true,
        "optional": false
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 205,
            "end": 220,
            "callee": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 228,
            "end": 229,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
