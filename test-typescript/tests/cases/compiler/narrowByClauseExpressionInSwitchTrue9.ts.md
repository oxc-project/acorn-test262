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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "IProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "name": "mine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 71,
              "end": 73,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 88,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 269,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "name": "x",
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
                        "name": "IProps",
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
                        "id": {
                          "type": "ObjectPattern",
                          "start": 116,
                          "end": 123,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 118,
                              "end": 121,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 121,
                                "name": "one",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 118,
                                "end": 121,
                                "name": "one",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                          "name": "one",
                          "typeAnnotation": null,
                          "decorators": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 239,
                                  "end": 240,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                    "name": "mine",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "kind": "let",
                            "declare": false
                          }
                        ],
                        "test": null
                      }
                    ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
