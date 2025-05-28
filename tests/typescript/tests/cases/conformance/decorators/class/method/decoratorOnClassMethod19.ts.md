__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 210,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 82,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 148,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 100,
              "end": 102,
              "name": "x"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 146,
            "decorators": [
              {
                "type": "Decorator",
                "start": 108,
                "end": 135,
                "expression": {
                  "type": "CallExpression",
                  "start": 109,
                  "end": 135,
                  "callee": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 118,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 119,
                      "end": 134,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 120,
                          "end": 125,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 121,
                            "end": 125,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 123,
                              "end": 125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 123,
                                "end": 125,
                                "decorators": [],
                                "name": "C1",
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
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 134,
                        "object": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 132,
                          "end": 134,
                          "name": "x"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 146,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 146,
                "body": []
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
      "start": 150,
      "end": 210,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 165,
            "end": 167,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 165,
              "end": 167,
              "name": "x"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 208,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 208,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 175,
                      "end": 202,
                      "expression": {
                        "type": "CallExpression",
                        "start": 176,
                        "end": 202,
                        "callee": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 185,
                          "decorators": [],
                          "name": "decorator",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 186,
                            "end": 201,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 187,
                                "end": 192,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 188,
                                  "end": 192,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 190,
                                    "end": 192,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 190,
                                      "end": 192,
                                      "decorators": [],
                                      "name": "C2",
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
                              "type": "MemberExpression",
                              "start": 197,
                              "end": 201,
                              "object": {
                                "type": "Identifier",
                                "start": 197,
                                "end": 198,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 199,
                                "end": 201,
                                "name": "x"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 208,
                "body": []
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
