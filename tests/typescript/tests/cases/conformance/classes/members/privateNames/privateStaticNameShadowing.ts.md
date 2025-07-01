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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "f",
              "start": 21,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "name": "m",
                  "start": 28,
                  "end": 30
                },
                "optional": false,
                "computed": false,
                "start": 26,
                "end": 30
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 26,
              "end": 32
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 33
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 49
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 61
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 62,
                          "end": 64
                        },
                        "optional": false,
                        "computed": false,
                        "start": 60,
                        "end": 64
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 60,
                      "end": 66
                    },
                    "directive": null,
                    "start": 60,
                    "end": 67
                  }
                ],
                "start": 52,
                "end": 73
              },
              "expression": false,
              "start": 49,
              "end": 73
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "m",
              "start": 85,
              "end": 87
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
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 107,
                              "end": 110
                            },
                            "start": 105,
                            "end": 110
                          },
                          "start": 104,
                          "end": 110
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 113,
                          "end": 115
                        },
                        "definite": false,
                        "start": 104,
                        "end": 115
                      }
                    ],
                    "declare": false,
                    "start": 98,
                    "end": 116
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
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 153,
                              "end": 156
                            },
                            "start": 151,
                            "end": 156
                          },
                          "start": 149,
                          "end": 156
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 159,
                          "end": 161
                        },
                        "definite": false,
                        "start": 149,
                        "end": 161
                      }
                    ],
                    "declare": false,
                    "start": 143,
                    "end": 162
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
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 204
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 205,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 203,
                        "end": 207
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 203,
                      "end": 209
                    },
                    "directive": null,
                    "start": 203,
                    "end": 210
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 297,
                      "end": 298
                    },
                    "start": 290,
                    "end": 299
                  }
                ],
                "start": 90,
                "end": 305
              },
              "expression": false,
              "start": 87,
              "end": 305
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 305
          }
        ],
        "start": 8,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 309
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 312
}
```
