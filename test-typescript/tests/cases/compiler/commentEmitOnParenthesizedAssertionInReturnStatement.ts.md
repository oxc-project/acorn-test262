__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 251,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 251,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 75,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "name": "client",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 30,
                "end": 75,
                "properties": [
                  {
                    "type": "Property",
                    "start": 36,
                    "end": 71,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 44,
                      "name": "getThing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 46,
                      "end": 71,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 52,
                        "end": 71,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 52,
                          "end": 67,
                          "object": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 59,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 67,
                            "name": "resolve",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 68,
                            "end": 70,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 79,
              "end": 249,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 82,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 82,
                "end": 249,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 179,
                              "end": 208,
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
                                  "name": "client",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 208,
                                "name": "getThing",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 232,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 86,
                    "end": 99,
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 93,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
