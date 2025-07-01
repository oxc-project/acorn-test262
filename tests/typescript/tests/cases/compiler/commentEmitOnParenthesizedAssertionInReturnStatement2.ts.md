__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
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
                "name": "client",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 29
              },
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 48
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 63
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 64,
                            "end": 71
                          },
                          "optional": false,
                          "computed": false,
                          "start": 56,
                          "end": 71
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 72,
                            "end": 74
                          }
                        ],
                        "optional": false,
                        "start": 56,
                        "end": 75
                      },
                      "id": null,
                      "generator": false,
                      "start": 50,
                      "end": 75
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 40,
                    "end": 75
                  }
                ],
                "start": 32,
                "end": 81
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 23,
              "end": 81
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 92
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 148,
                                "end": 152
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "client",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 153,
                                "end": 159
                              },
                              "optional": false,
                              "computed": false,
                              "start": 148,
                              "end": 159
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getThing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 179
                            },
                            "optional": false,
                            "computed": false,
                            "start": 148,
                            "end": 179
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 148,
                          "end": 181
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 192,
                            "end": 199
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 200,
                                "end": 206
                              }
                            ],
                            "start": 199,
                            "end": 207
                          },
                          "start": 192,
                          "end": 207
                        },
                        "start": 148,
                        "end": 207
                      },
                      "start": 103,
                      "end": 209
                    }
                  ],
                  "start": 95,
                  "end": 215
                },
                "expression": false,
                "start": 92,
                "end": 215
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 89,
              "end": 215
            }
          ],
          "start": 17,
          "end": 219
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 219
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 219
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 219
}
```
