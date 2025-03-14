__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 236,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 13,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 25,
            "decorators": [],
            "name": "Factory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 25,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
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
      "start": 27,
      "end": 64,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 64,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 62,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 62,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 62,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "c",
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
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 103,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 102,
              "decorators": [],
              "name": "_t",
              "optional": false
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
            "end": 233,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 119,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 233,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 233,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 132,
                    "end": 141,
                    "expression": {
                      "type": "CallExpression",
                      "start": 132,
                      "end": 140,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 132,
                        "end": 137
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 150,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 154,
                        "end": 192,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 158,
                          "end": 192,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 172,
                              "end": 182,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 172,
                                "end": 173,
                                "decorators": [],
                                "name": "t",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "start": 175,
                                "end": 182,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 175,
                                  "end": 179
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 180,
                                  "end": 182,
                                  "decorators": [],
                                  "name": "_t",
                                  "optional": false
                                }
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
                    "type": "VariableDeclaration",
                    "start": 201,
                    "end": 227,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 205,
                        "end": 226,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 209,
                          "end": 226,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 224,
                              "end": 225,
                              "decorators": [],
                              "name": "s",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 209,
                            "end": 223,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 216,
                              "decorators": [],
                              "name": "Factory",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 217,
                              "end": 223,
                              "decorators": [],
                              "name": "create",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
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
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
