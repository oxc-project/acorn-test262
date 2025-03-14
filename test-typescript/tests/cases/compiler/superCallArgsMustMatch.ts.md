__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 32,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 68,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 68,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 68,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 50,
                  "end": 63,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 63,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 63,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "T5",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 329,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 326,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 326,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 326,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 272,
                    "end": 284,
                    "expression": {
                      "type": "CallExpression",
                      "start": 272,
                      "end": 283,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 278,
                          "end": 282,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 272,
                        "end": 277
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 294,
                    "end": 319,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 298,
                        "end": 318,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 307,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 299,
                            "end": 307,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 301,
                              "end": 307
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 310,
                          "end": 318,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 310,
                            "end": 314
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 318,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "T6",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 95,
        "decorators": [],
        "name": "T5",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 95,
        "end": 103,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 96,
            "end": 102
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
