__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 270,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 169,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 169,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 18,
              "end": 169,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 24,
                  "end": 52,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 31,
                    "end": 37,
                    "name": "field"
                  },
                  "typeAnnotation": null,
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
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 42,
                        "end": 49,
                        "name": "method"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 57,
                  "end": 88,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 64,
                    "end": 71,
                    "name": "method"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 71,
                    "end": 88,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 93,
                  "end": 124,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 108,
                    "decorators": [],
                    "name": "getClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 108,
                    "end": 124,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "D",
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
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 129,
                  "end": 166,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 144,
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 144,
                    "end": 166,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 158,
                              "end": 164,
                              "name": "field"
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 179,
            "end": 182,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 193,
                    "decorators": [],
                    "name": "getClass",
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
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 204,
                "decorators": [],
                "name": "getField",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
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
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 219,
              "decorators": [],
              "name": "getClass",
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
        "property": {
          "type": "PrivateIdentifier",
          "start": 222,
          "end": 229,
          "name": "method"
        },
        "optional": false,
        "computed": false
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
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 242,
              "end": 250,
              "decorators": [],
              "name": "getClass",
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
        "property": {
          "type": "PrivateIdentifier",
          "start": 253,
          "end": 259,
          "name": "field"
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
