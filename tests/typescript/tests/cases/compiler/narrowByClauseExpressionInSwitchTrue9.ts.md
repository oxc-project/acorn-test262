__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "IProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 35,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 28,
                "end": 35
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 271,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "mine",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": "",
              "raw": "\"\""
            },
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
            "start": 80,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 88,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 269,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                "start": 100,
                "end": 269,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 110,
                    "end": 128,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 116,
                        "end": 127,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 116,
                          "end": 123,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 118,
                              "end": 121,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 121,
                                "decorators": [],
                                "name": "one",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 121,
                                "decorators": [],
                                "name": "one",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "SwitchStatement",
                    "start": 137,
                    "end": 263,
                    "discriminant": {
                      "type": "Literal",
                      "start": 145,
                      "end": 149,
                      "value": true,
                      "raw": "true"
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 165,
                        "end": 197,
                        "test": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 173,
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "consequent": [
                          {
                            "type": "BreakStatement",
                            "start": 191,
                            "end": 197,
                            "label": null
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 210,
                        "end": 253,
                        "test": null,
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "start": 235,
                            "end": 253,
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 239,
                                "end": 252,
                                "id": {
                                  "type": "Identifier",
                                  "start": 239,
                                  "end": 240,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 243,
                                  "end": 252,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 252,
                                    "decorators": [],
                                    "name": "mine",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        ]
                      }
                    ]
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
