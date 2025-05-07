__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 219,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 219,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 219,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 81,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "client",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "start": 32,
                "end": 81,
                "properties": [
                  {
                    "type": "Property",
                    "start": 40,
                    "end": 75,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 48,
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 50,
                      "end": 75,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 56,
                        "end": 75,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 72,
                            "end": 74,
                            "raw": "''",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 56,
                          "end": 71,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 63,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 71,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 89,
              "end": 215,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 92,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 92,
                "end": 215,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 95,
                  "end": 215,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 103,
                      "end": 209,
                      "argument": {
                        "type": "TSSatisfiesExpression",
                        "start": 148,
                        "end": 207,
                        "expression": {
                          "type": "CallExpression",
                          "start": 148,
                          "end": 181,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 148,
                            "end": 179,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 148,
                              "end": 159,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 148,
                                "end": 152
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 153,
                                "end": 159,
                                "decorators": [],
                                "name": "client",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 179,
                              "decorators": [],
                              "name": "getThing",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 192,
                          "end": 207,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 199,
                            "end": 207,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 200,
                                "end": 206
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 199,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
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
                "returnType": null,
                "typeParameters": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
