__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "CONFIG",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 47
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 49,
                  "end": 51
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 44,
                "end": 51
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 63
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        },
                        "start": 77,
                        "end": 85
                      },
                      "start": 74,
                      "end": 85
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CONFIG",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 97,
                              "end": 103
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 104,
                              "end": 107
                            },
                            "optional": false,
                            "computed": false,
                            "start": 97,
                            "end": 107
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 110,
                            "end": 113
                          },
                          "start": 97,
                          "end": 113
                        },
                        "directive": null,
                        "start": 97,
                        "end": 114
                      }
                    ],
                    "start": 87,
                    "end": 120
                  },
                  "expression": false,
                  "start": 65,
                  "end": 120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 57,
                "end": 120
              }
            ],
            "start": 38,
            "end": 122
          },
          "definite": false,
          "start": 29,
          "end": 122
        }
      ],
      "declare": false,
      "start": 23,
      "end": 123
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
            "name": "helper",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 137
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 149,
                  "end": 150
                }
              ],
              "start": 148,
              "end": 151
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 156
                      },
                      "typeArguments": null,
                      "start": 155,
                      "end": 156
                    },
                    "start": 155,
                    "end": 158
                  },
                  "start": 153,
                  "end": 158
                },
                "start": 152,
                "end": 158
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "helper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 172
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 174
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 175,
                            "end": 180
                          },
                          "optional": false,
                          "computed": false,
                          "start": 173,
                          "end": 180
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 181,
                            "end": 182
                          }
                        ],
                        "optional": false,
                        "start": 173,
                        "end": 183
                      }
                    ],
                    "optional": false,
                    "start": 166,
                    "end": 184
                  },
                  "directive": null,
                  "start": 166,
                  "end": 185
                }
              ],
              "start": 160,
              "end": 187
            },
            "expression": false,
            "start": 140,
            "end": 187
          },
          "definite": false,
          "start": 131,
          "end": 187
        }
      ],
      "declare": false,
      "start": 125,
      "end": 187
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 187
}
```
