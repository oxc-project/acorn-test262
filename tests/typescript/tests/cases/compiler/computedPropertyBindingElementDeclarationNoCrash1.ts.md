__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "State",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 74
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 84,
                  "end": 90
                },
                "start": 82,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 81,
              "end": 91
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                },
                "start": 95,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 94,
              "end": 104
            }
          ],
          "start": 77,
          "end": 106
        },
        "declare": false,
        "start": 64,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 57,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 126
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
                "name": "setState",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 139
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
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 152
                        },
                        "typeArguments": null,
                        "start": 147,
                        "end": 152
                      },
                      "start": 145,
                      "end": 152
                    },
                    "start": 140,
                    "end": 152
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 154,
                  "end": 156
                },
                "expression": false,
                "start": 139,
                "end": 156
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 131,
              "end": 156
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 163
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 170,
                        "end": 173
                      },
                      "start": 168,
                      "end": 173
                    },
                    "start": 167,
                    "end": 173
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 196,
                                  "end": 199
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 201,
                                  "end": 206
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 195,
                              "end": 207
                            },
                            "init": null,
                            "definite": false,
                            "start": 195,
                            "end": 207
                          }
                        ],
                        "declare": false,
                        "start": 189,
                        "end": 207
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 217
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entries",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 225
                          },
                          "optional": false,
                          "computed": false,
                          "start": 211,
                          "end": 225
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 227
                          }
                        ],
                        "optional": false,
                        "start": 211,
                        "end": 228
                      },
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
                                  "type": "ThisExpression",
                                  "start": 238,
                                  "end": 242
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "setState",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 243,
                                  "end": 251
                                },
                                "optional": false,
                                "computed": false,
                                "start": 238,
                                "end": 251
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 263,
                                        "end": 266
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 269,
                                        "end": 274
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": true,
                                      "optional": false,
                                      "start": 262,
                                      "end": 274
                                    }
                                  ],
                                  "start": 252,
                                  "end": 283
                                }
                              ],
                              "optional": false,
                              "start": 238,
                              "end": 284
                            },
                            "directive": null,
                            "start": 238,
                            "end": 285
                          }
                        ],
                        "start": 230,
                        "end": 291
                      },
                      "start": 184,
                      "end": 291
                    }
                  ],
                  "start": 178,
                  "end": 295
                },
                "id": null,
                "generator": false,
                "start": 166,
                "end": 295
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 159,
              "end": 296
            }
          ],
          "start": 127,
          "end": 298
        },
        "abstract": false,
        "declare": false,
        "start": 116,
        "end": 298
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 109,
      "end": 298
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 298
}
```
