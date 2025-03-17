__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 169,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 18,
              "end": 169,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 24,
                  "end": 52,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 31,
                    "end": 37,
                    "name": "field"
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 40,
                    "end": 51,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 40,
                      "end": 49,
                      "object": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 42,
                        "end": 49,
                        "name": "method"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 57,
                  "end": 88,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 64,
                    "end": 71,
                    "name": "method"
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 71,
                    "end": 88,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 88,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 76,
                          "end": 86,
                          "argument": {
                            "type": "Literal",
                            "start": 83,
                            "end": 85,
                            "value": 42,
                            "raw": "42"
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 93,
                  "end": 124,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 108,
                    "name": "getClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 108,
                    "end": 124,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 111,
                      "end": 124,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 113,
                          "end": 122,
                          "argument": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "name": "D",
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 129,
                  "end": 166,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 144,
                    "name": "getField",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 144,
                    "end": 166,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 147,
                      "end": 166,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 149,
                          "end": 164,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 156,
                            "end": 164,
                            "object": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 157,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 158,
                              "end": 164,
                              "name": "field"
                            },
                            "computed": false,
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 208,
      "expression": {
        "type": "CallExpression",
        "start": 171,
        "end": 207,
        "callee": {
          "type": "MemberExpression",
          "start": 171,
          "end": 182,
          "object": {
            "type": "Identifier",
            "start": 171,
            "end": 178,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 179,
            "end": 182,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 183,
            "end": 206,
            "callee": {
              "type": "MemberExpression",
              "start": 183,
              "end": 204,
              "object": {
                "type": "CallExpression",
                "start": 183,
                "end": 195,
                "callee": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 193,
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
                    "type": "Identifier",
                    "start": 185,
                    "end": 193,
                    "name": "getClass",
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
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 204,
                "name": "getField",
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 230,
      "expression": {
        "type": "MemberExpression",
        "start": 209,
        "end": 229,
        "object": {
          "type": "CallExpression",
          "start": 209,
          "end": 221,
          "callee": {
            "type": "MemberExpression",
            "start": 209,
            "end": 219,
            "object": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 219,
              "name": "getClass",
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
        "property": {
          "type": "PrivateIdentifier",
          "start": 222,
          "end": 229,
          "name": "method"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 260,
      "expression": {
        "type": "MemberExpression",
        "start": 240,
        "end": 259,
        "object": {
          "type": "CallExpression",
          "start": 240,
          "end": 252,
          "callee": {
            "type": "MemberExpression",
            "start": 240,
            "end": 250,
            "object": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 242,
              "end": 250,
              "name": "getClass",
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
        "property": {
          "type": "PrivateIdentifier",
          "start": 253,
          "end": 259,
          "name": "field"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
