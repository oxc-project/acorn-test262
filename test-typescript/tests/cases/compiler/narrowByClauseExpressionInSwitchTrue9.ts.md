__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 38,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "one",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 35,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 28,
                "end": 35
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "IProps",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 271,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 74,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "mine",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              }
            },
            "value": {
              "type": "Literal",
              "start": 71,
              "end": 73,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 269,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 88,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 269,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 269,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 110,
                    "end": 128,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 116,
                        "end": 127,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 116,
                          "end": 123,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 118,
                              "end": 121,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 121,
                                "decorators": [],
                                "name": "one",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 121,
                                "decorators": [],
                                "name": "one",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "SwitchStatement",
                    "start": 137,
                    "end": 263,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 165,
                        "end": 197,
                        "consequent": [
                          {
                            "type": "BreakStatement",
                            "start": 191,
                            "end": 197,
                            "label": null
                          }
                        ],
                        "test": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 173,
                          "decorators": [],
                          "name": "one",
                          "optional": false
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 210,
                        "end": 253,
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "start": 235,
                            "end": 253,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 239,
                                "end": 252,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 239,
                                  "end": 240,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 243,
                                  "end": 252,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 252,
                                    "decorators": [],
                                    "name": "mine",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let"
                          }
                        ],
                        "test": null
                      }
                    ],
                    "discriminant": {
                      "type": "Literal",
                      "start": 145,
                      "end": 149,
                      "raw": "true",
                      "value": true
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
                  "start": 89,
                  "end": 98,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 92,
                      "end": 98,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 98,
                        "decorators": [],
                        "name": "IProps",
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
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Foo",
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
