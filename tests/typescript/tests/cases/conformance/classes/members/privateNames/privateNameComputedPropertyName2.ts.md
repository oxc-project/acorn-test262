__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 26,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 10,
                "end": 26,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 11,
                    "end": 15,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 15,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14,
                        "end": 15,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14,
                          "end": 15,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 94,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
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
        "start": 37,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 52,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 45,
              "name": "x"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "value": 100,
              "raw": "100"
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
            "start": 57,
            "end": 92,
            "decorators": [],
            "key": {
              "type": "SequenceExpression",
              "start": 59,
              "end": 85,
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "start": 59,
                  "end": 80,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 66,
                    "end": 80,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 71,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 68,
                          "end": 71,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 70,
                            "end": 71,
                            "typeName": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 80,
                      "object": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 78,
                        "end": 80,
                        "name": "x"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                },
                {
                  "type": "Literal",
                  "start": 82,
                  "end": 85,
                  "value": "_",
                  "raw": "\"_\""
                }
              ]
            },
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 92,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 92,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 120,
        "callee": {
          "type": "MemberExpression",
          "start": 96,
          "end": 107,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 103,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 108,
            "end": 119,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 112,
              "decorators": [],
              "name": "getX",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 113,
                "end": 118,
                "callee": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
