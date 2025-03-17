__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 45,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 45,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 23,
                    "end": 43,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 35,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 30,
                          "end": 35,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 32,
                            "end": 35
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 38,
                        "end": 42
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 109,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
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
              "start": 76,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 109,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 77,
                  "end": 100,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 100,
                    "decorators": [],
                    "name": "species",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 127,
              "decorators": [],
              "name": "printSpecies",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 199,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 199,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 140,
                    "end": 163,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 144,
                        "end": 162,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 144,
                          "end": 155,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 146,
                              "end": 153,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 146,
                                "end": 153,
                                "decorators": [],
                                "name": "species",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 146,
                                "end": 153,
                                "decorators": [],
                                "name": "species",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 158,
                          "end": 162
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 193,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 172,
                      "end": 192,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 184,
                          "end": 191,
                          "decorators": [],
                          "name": "species",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 183,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 179,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 183,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
        "start": 52,
        "end": 58,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
