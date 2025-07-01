__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 28,
                "end": 35
              },
              "start": 26,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 17,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mine",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 71,
              "end": 73
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 56,
            "end": 74
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 88
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 98
                      },
                      "typeArguments": null,
                      "start": 92,
                      "end": 98
                    },
                    "start": 90,
                    "end": 98
                  },
                  "start": 89,
                  "end": 98
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "one",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 118,
                                "end": 121
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "one",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 118,
                                "end": 121
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 118,
                              "end": 121
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 123
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 127
                        },
                        "definite": false,
                        "start": 116,
                        "end": 127
                      }
                    ],
                    "declare": false,
                    "start": 110,
                    "end": 128
                  },
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 145,
                      "end": 149
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 173
                        },
                        "consequent": [
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 191,
                            "end": 197
                          }
                        ],
                        "start": 165,
                        "end": 197
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 239,
                                  "end": 240
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mine",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 248,
                                    "end": 252
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 243,
                                  "end": 252
                                },
                                "definite": false,
                                "start": 239,
                                "end": 252
                              }
                            ],
                            "declare": false,
                            "start": 235,
                            "end": 253
                          }
                        ],
                        "start": 210,
                        "end": 253
                      }
                    ],
                    "start": 137,
                    "end": 263
                  }
                ],
                "start": 100,
                "end": 269
              },
              "expression": false,
              "start": 88,
              "end": 269
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 269
          }
        ],
        "start": 50,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
