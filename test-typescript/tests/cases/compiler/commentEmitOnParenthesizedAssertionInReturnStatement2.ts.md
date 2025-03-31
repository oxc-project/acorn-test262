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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 219,
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
          "end": 219,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 81,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "name": "client",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 32,
                "end": 81,
                "properties": [
                  {
                    "type": "Property",
                    "start": 40,
                    "end": 75,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 48,
                      "name": "getThing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 50,
                      "end": 75,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 56,
                        "end": 75,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 56,
                          "end": 71,
                          "object": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 63,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 71,
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
                            "start": 72,
                            "end": 74,
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
              "start": 89,
              "end": 215,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 92,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 92,
                "end": 215,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 148,
                            "end": 179,
                            "object": {
                              "type": "MemberExpression",
                              "start": 148,
                              "end": 159,
                              "object": {
                                "type": "ThisExpression",
                                "start": 148,
                                "end": 152
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 153,
                                "end": 159,
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
                              "start": 171,
                              "end": 179,
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
                          "type": "TSTypeReference",
                          "start": 192,
                          "end": 207,
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 199,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        }
                      }
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
