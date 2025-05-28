__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 251,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 251,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
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
          "start": 17,
          "end": 251,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 75,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "client",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "start": 30,
                "end": 75,
                "properties": [
                  {
                    "type": "Property",
                    "start": 36,
                    "end": 71,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 44,
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 46,
                      "end": 71,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 67,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 68,
                            "end": 70,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
              "start": 79,
              "end": 249,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 82,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 82,
                "end": 249,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
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
                },
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
                                  "decorators": [],
                                  "name": "client",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 208,
                                "decorators": [],
                                "name": "getThing",
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
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
