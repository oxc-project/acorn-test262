__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 88
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 90,
                        "end": 93
                      },
                      "start": 90,
                      "end": 95
                    },
                    "start": 88,
                    "end": 95
                  },
                  "value": null,
                  "start": 81,
                  "end": 95
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 123
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 131
                          },
                          "optional": false,
                          "computed": false,
                          "start": 116,
                          "end": 131
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 116,
                        "end": 133
                      },
                      "start": 110,
                      "end": 133
                    },
                    "directive": null,
                    "start": 110,
                    "end": 134
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 152
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 158,
                                "end": 161
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
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
                                "generator": false,
                                "start": 164,
                                "end": 174
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 157,
                              "end": 174
                            }
                          ],
                          "start": 155,
                          "end": 176
                        },
                        "definite": false,
                        "start": 149,
                        "end": 176
                      }
                    ],
                    "declare": false,
                    "start": 143,
                    "end": 177
                  }
                ],
                "start": 100,
                "end": 237
              },
              "id": null,
              "generator": false,
              "start": 74,
              "end": 237
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 238
          }
        ],
        "start": 64,
        "end": 240
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 240
}
```
