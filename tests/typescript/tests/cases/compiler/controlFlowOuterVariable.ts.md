__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 187,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 123,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "CONFIG",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 38,
            "end": 122,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 51,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 49,
                  "end": 51,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 57,
                "end": 120,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 63,
                  "decorators": [],
                  "name": "setFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 65,
                  "end": 120,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 74,
                      "end": 85,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 77,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 87,
                    "end": 120,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 97,
                        "end": 114,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 97,
                          "end": 113,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 97,
                            "end": 107,
                            "object": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 103,
                              "decorators": [],
                              "name": "CONFIG",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 107,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 113,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 187,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "decorators": [],
            "name": "helper",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 140,
            "end": 187,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 148,
              "end": 151,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 149,
                  "end": 150,
                  "name": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 158,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 158,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 155,
                    "end": 158,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 155,
                      "end": 156,
                      "typeName": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 160,
              "end": 187,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 166,
                  "end": 185,
                  "expression": {
                    "type": "CallExpression",
                    "start": 166,
                    "end": 184,
                    "callee": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 172,
                      "decorators": [],
                      "name": "helper",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 173,
                        "end": 183,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 173,
                          "end": 180,
                          "object": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 180,
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 181,
                            "end": 182,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
