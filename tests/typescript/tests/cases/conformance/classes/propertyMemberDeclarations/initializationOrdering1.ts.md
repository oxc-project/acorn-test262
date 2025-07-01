__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Helper",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 29,
                  "end": 36
                },
                "start": 27,
                "end": 36
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 54,
                      "end": 58
                    },
                    "start": 47,
                    "end": 58
                  }
                ],
                "start": 37,
                "end": 64
              },
              "expression": false,
              "start": 25,
              "end": 64
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 64
          }
        ],
        "start": 13,
        "end": 66
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 87
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
                "start": 94,
                "end": 105
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
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "facade",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Helper",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 123,
                            "end": 129
                          },
                          "typeArguments": null,
                          "start": 123,
                          "end": 129
                        },
                        "start": 121,
                        "end": 129
                      },
                      "start": 115,
                      "end": 129
                    },
                    "readonly": true,
                    "static": false,
                    "start": 106,
                    "end": 129
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
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
                            "start": 141,
                            "end": 148
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 152
                          },
                          "optional": false,
                          "computed": false,
                          "start": 141,
                          "end": 152
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 153,
                              "end": 157
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bug",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 158,
                              "end": 161
                            },
                            "optional": false,
                            "computed": false,
                            "start": 153,
                            "end": 161
                          }
                        ],
                        "optional": false,
                        "start": 141,
                        "end": 162
                      },
                      "directive": null,
                      "start": 141,
                      "end": 162
                    }
                  ],
                  "start": 131,
                  "end": 168
                },
                "expression": false,
                "start": 105,
                "end": 168
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 94,
              "end": 168
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 176
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 179,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "facade",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 190
                    },
                    "optional": false,
                    "computed": false,
                    "start": 179,
                    "end": 190
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "create",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 197
                  },
                  "optional": false,
                  "computed": false,
                  "start": 179,
                  "end": 197
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 179,
                "end": 199
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 173,
              "end": 199
            }
          ],
          "start": 88,
          "end": 202
        },
        "abstract": false,
        "declare": false,
        "start": 75,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Broken",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [],
            "start": 215,
            "end": 225
          }
        ],
        "start": 204,
        "end": 226
      },
      "directive": null,
      "start": 204,
      "end": 226
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
