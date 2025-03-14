commentEmitOnParenthesizedAssertionInReturnStatement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 251,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 251,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 251,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 75,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "client",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ObjectExpression",
                "start": 30,
                "end": 75,
                "properties": [
                  {
                    "type": "Property",
                    "start": 36,
                    "end": 71,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 44,
                      "decorators": [],
                      "name": "getThing",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 46,
                      "end": 71,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 52,
                        "end": 71,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 68,
                            "end": 70,
                            "raw": "''",
                            "value": ""
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 52,
                          "end": 67,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 59,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 67,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 79,
              "end": 249,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 82,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 82,
                "end": 249,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 100,
                  "end": 249,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 106,
                      "end": 245,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 179,
                        "end": 238,
                        "expression": {
                          "type": "TSAsExpression",
                          "start": 179,
                          "end": 221,
                          "expression": {
                            "type": "CallExpression",
                            "start": 179,
                            "end": 210,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 179,
                              "end": 208,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 179,
                                "end": 190,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 179,
                                  "end": 183
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 184,
                                  "end": 190,
                                  "decorators": [],
                                  "name": "client",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 208,
                                "decorators": [],
                                "name": "getThing",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 214,
                            "end": 221
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 225,
                          "end": 238,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 232,
                            "end": 238,
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 233,
                                "end": 237
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 232,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 86,
                    "end": 99,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 93,
                      "end": 99,
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 94,
                          "end": 98
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 93,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
