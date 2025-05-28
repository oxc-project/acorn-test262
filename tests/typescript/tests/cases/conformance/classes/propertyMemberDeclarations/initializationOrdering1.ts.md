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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Helper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 64,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 64,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 29,
                  "end": 36
                }
              },
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
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 202,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 202,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 87,
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 88,
          "end": 202,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 94,
              "end": 168,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 105,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 105,
                "end": 168,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                      "decorators": [],
                      "name": "facade",
                      "optional": false,
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
                            "decorators": [],
                            "name": "Helper",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": true,
                    "static": false
                  }
                ],
                "returnType": null,
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
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 152,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
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
                              "decorators": [],
                              "name": "bug",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 173,
              "end": 199,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 173,
                "end": 176,
                "decorators": [],
                "name": "bug",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                      "decorators": [],
                      "name": "facade",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 197,
                    "decorators": [],
                    "name": "create",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 215,
            "end": 225,
            "callee": {
              "type": "Identifier",
              "start": 219,
              "end": 225,
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
