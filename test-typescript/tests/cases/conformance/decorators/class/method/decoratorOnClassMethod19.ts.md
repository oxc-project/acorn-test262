__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 82,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 100,
              "end": 102,
              "name": "x"
            },
            "value": null,
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
            "start": 108,
            "end": 146,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 146,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 146,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 119,
                      "end": 134,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 120,
                          "end": 125,
                          "name": "x",
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
                                "name": "C1",
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
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 134,
                        "object": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 132,
                          "end": 134,
                          "name": "x"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
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
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 165,
            "end": 167,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 165,
              "end": 167,
              "name": "x"
            },
            "value": null,
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
            "start": 173,
            "end": 208,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 208,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "name": "p",
                  "typeAnnotation": null,
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
                          "name": "decorator",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 186,
                            "end": 201,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 187,
                                "end": 192,
                                "name": "x",
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
                                      "name": "C2",
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
                              "type": "MemberExpression",
                              "start": 197,
                              "end": 201,
                              "object": {
                                "type": "Identifier",
                                "start": 197,
                                "end": 198,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 199,
                                "end": 201,
                                "name": "x"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 208,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
