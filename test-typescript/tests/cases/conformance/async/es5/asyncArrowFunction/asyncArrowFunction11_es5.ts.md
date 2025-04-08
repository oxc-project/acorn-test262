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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 237,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "RestElement",
                  "start": 81,
                  "end": 95,
                  "argument": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 131,
                            "name": "resolve",
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
                      }
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 152,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": true,
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
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 170,
                                  "end": 174
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
