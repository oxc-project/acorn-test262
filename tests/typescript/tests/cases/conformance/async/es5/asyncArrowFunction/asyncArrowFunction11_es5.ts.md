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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 237,
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 81,
                  "end": 95,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 237,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 134,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 110,
                      "end": 133,
                      "argument": {
                        "type": "CallExpression",
                        "start": 116,
                        "end": 133,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 116,
                          "end": 131,
                          "object": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 123,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 131,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 177,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 176,
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
                              "kind": "init",
                              "key": {
                                "type": "Literal",
                                "start": 158,
                                "end": 161,
                                "value": "a",
                                "raw": "\"a\""
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 164,
                                "end": 174,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 170,
                                  "end": 174
                                },
                                "id": null,
                                "generator": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
