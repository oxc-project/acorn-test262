__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 45,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 27,
                    "end": 43,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 34,
                      "end": 42,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 36,
                          "end": 40,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 36,
                            "end": 37,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 39,
                            "end": 40,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 19,
                  "end": 23,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 23,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 22,
                      "end": 23,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
        "end": 7,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 67,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 67,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 59,
                  "end": 67,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 75,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 78,
            "end": 84,
            "arguments": [
              {
                "type": "Literal",
                "start": 82,
                "end": 83,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 81,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 86,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 88,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "raw": "5",
          "value": 5,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
