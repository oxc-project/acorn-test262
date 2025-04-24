__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 297,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 76,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "_t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 295,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 295,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 295,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 105,
                    "end": 131,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 109,
                        "end": 130,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 110,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 113,
                          "end": 130,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 119,
                            "end": 130,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 121,
                                "end": 128,
                                "directive": null,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 121,
                                  "end": 128,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 121,
                                    "end": 125
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 126,
                                    "end": 128,
                                    "decorators": [],
                                    "name": "_t",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 140,
                    "end": 144,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 140,
                      "end": 143,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 141,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 245,
                    "end": 253,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 245,
                      "end": 252,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 245,
                        "end": 249
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 252,
                        "decorators": [],
                        "name": "_t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 272,
                    "end": 289,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 272,
                      "end": 288,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 278,
                          "end": 287,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 272,
                        "end": 277
                      },
                      "optional": false,
                      "typeArguments": null
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
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
