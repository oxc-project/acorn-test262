__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "Helper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "name": "create",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 64,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 58,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 29,
                  "end": 36
                }
              }
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 202,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 87,
          "name": "Broken",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 88,
          "end": 202,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 94,
              "end": 168,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 105,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 105,
                "end": 168,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 106,
                    "end": 129,
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 129,
                      "name": "facade",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 121,
                        "end": 129,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 123,
                          "end": 129,
                          "typeName": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 129,
                            "name": "Helper",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "readonly": true,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 131,
                  "end": 168,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 141,
                      "end": 162,
                      "expression": {
                        "type": "CallExpression",
                        "start": 141,
                        "end": 162,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 141,
                          "end": 152,
                          "object": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 148,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 152,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 153,
                            "end": 161,
                            "object": {
                              "type": "ThisExpression",
                              "start": 153,
                              "end": 157
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 161,
                              "name": "bug",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
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
            },
            {
              "type": "PropertyDefinition",
              "start": 173,
              "end": 199,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 176,
                "name": "bug",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "CallExpression",
                "start": 179,
                "end": 199,
                "callee": {
                  "type": "MemberExpression",
                  "start": 179,
                  "end": 197,
                  "object": {
                    "type": "MemberExpression",
                    "start": 179,
                    "end": 190,
                    "object": {
                      "type": "ThisExpression",
                      "start": 179,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "name": "facade",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 197,
                    "name": "create",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 226,
      "expression": {
        "type": "NewExpression",
        "start": 204,
        "end": 226,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 214,
          "name": "Broken",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 215,
            "end": 225,
            "callee": {
              "type": "Identifier",
              "start": 219,
              "end": 225,
              "name": "Helper",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
