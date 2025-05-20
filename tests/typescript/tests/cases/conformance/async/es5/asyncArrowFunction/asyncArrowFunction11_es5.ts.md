__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 240,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 238,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 237,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 237,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 134,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 110,
                      "end": 133,
                      "argument": {
                        "type": "CallExpression",
                        "start": 116,
                        "end": 133,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 116,
                          "end": 131,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 123,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 131,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 176,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 152,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 155,
                          "end": 176,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 157,
                              "end": 174,
                              "computed": true,
                              "key": {
                                "type": "Literal",
                                "start": 158,
                                "end": 161,
                                "raw": "\"a\"",
                                "value": "a"
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 164,
                                "end": 174,
                                "async": false,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 170,
                                  "end": 174
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
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 81,
                  "end": 95,
                  "argument": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 90,
                      "end": 95,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 90,
                        "end": 93
                      }
                    }
                  },
                  "value": null
                }
              ],
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
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
