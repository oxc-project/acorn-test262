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
          "end": 219,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 81,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "client",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 48,
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 50,
                      "end": 75,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 71,
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
                            "start": 72,
                            "end": 74,
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
              "start": 89,
              "end": 215,
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
              "value": {
                "type": "FunctionExpression",
                "start": 92,
                "end": 215,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                              "start": 171,
                              "end": 179,
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
                          "type": "TSTypeReference",
                          "start": 192,
                          "end": 207,
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 199,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
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
