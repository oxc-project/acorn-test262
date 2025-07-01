__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14,
                          "end": 15
                        },
                        "typeArguments": null,
                        "start": 14,
                        "end": 15
                      },
                      "start": 12,
                      "end": 15
                    },
                    "start": 11,
                    "end": 15
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 17,
                  "end": 26
                },
                "start": 10,
                "end": 26
              },
              "start": 8,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 36
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
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 43,
              "end": 45
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 48,
              "end": 51
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 43,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 63
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 71
                            },
                            "typeArguments": null,
                            "start": 70,
                            "end": 71
                          },
                          "start": 68,
                          "end": 71
                        },
                        "start": 67,
                        "end": 71
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 77
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "x",
                        "start": 78,
                        "end": 80
                      },
                      "optional": false,
                      "computed": false,
                      "start": 76,
                      "end": 80
                    },
                    "id": null,
                    "generator": false,
                    "start": 66,
                    "end": 80
                  },
                  "start": 59,
                  "end": 80
                },
                {
                  "type": "Literal",
                  "value": "_",
                  "raw": "\"_\"",
                  "start": 82,
                  "end": 85
                }
              ],
              "start": 59,
              "end": 85
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 90,
                "end": 92
              },
              "expression": false,
              "start": 87,
              "end": 92
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 92
          }
        ],
        "start": 37,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getX",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 112
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "typeArguments": null,
                "arguments": [],
                "start": 113,
                "end": 118
              }
            ],
            "optional": false,
            "start": 108,
            "end": 119
          }
        ],
        "optional": false,
        "start": 96,
        "end": 120
      },
      "directive": null,
      "start": 96,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
