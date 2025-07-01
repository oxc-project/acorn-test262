__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 26
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 32,
                            "end": 35
                          },
                          "start": 30,
                          "end": 35
                        },
                        "start": 27,
                        "end": 35
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 38,
                        "end": 42
                      },
                      "start": 36,
                      "end": 42
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 23,
                    "end": 43
                  }
                ],
                "start": 21,
                "end": 45
              },
              "start": 19,
              "end": 45
            },
            "start": 12,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 45
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 58
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 76
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "species",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      },
                      "start": 92,
                      "end": 100
                    },
                    "start": 85,
                    "end": 100
                  },
                  "readonly": false,
                  "static": false,
                  "start": 77,
                  "end": 100
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 102,
                "end": 109
              },
              "expression": false,
              "start": 76,
              "end": 109
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 109
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "printSpecies",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 127
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
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
                                "name": "species",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 146,
                                "end": 153
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "species",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 146,
                                "end": 153
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 146,
                              "end": 153
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 155
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 158,
                          "end": 162
                        },
                        "definite": false,
                        "start": 144,
                        "end": 162
                      }
                    ],
                    "declare": false,
                    "start": 140,
                    "end": 163
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 179
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 183
                        },
                        "optional": false,
                        "computed": false,
                        "start": 172,
                        "end": 183
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "species",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 191
                        }
                      ],
                      "optional": false,
                      "start": 172,
                      "end": 192
                    },
                    "directive": null,
                    "start": 172,
                    "end": 193
                  }
                ],
                "start": 130,
                "end": 199
              },
              "expression": false,
              "start": 127,
              "end": 199
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 199
          }
        ],
        "start": 59,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 46,
      "end": 201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
