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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 102,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 100,
              "end": 102,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 146,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 108,
                "end": 135,
                "expression": {
                  "type": "CallExpression",
                  "start": 109,
                  "end": 135,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 119,
                      "end": 134,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 134,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 132,
                          "end": 134,
                          "name": "x"
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
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
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 118,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false
                  },
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
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 146,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 146,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 210,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 165,
            "end": 167,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 165,
              "end": 167,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 208,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 208,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 208,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 186,
                            "end": 201,
                            "async": false,
                            "body": {
                              "type": "MemberExpression",
                              "start": 197,
                              "end": 201,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 197,
                                "end": 198,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 199,
                                "end": 201,
                                "name": "x"
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
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
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 185,
                          "decorators": [],
                          "name": "decorator",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ],
                  "name": "p",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
