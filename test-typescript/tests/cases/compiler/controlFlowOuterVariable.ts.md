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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "name": "CONFIG",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 49,
                  "end": 51,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 57,
                "end": 120,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 63,
                  "name": "setFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 65,
                  "end": 120,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 74,
                      "end": 85,
                      "name": "foo",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 77,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                              "name": "CONFIG",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 107,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 113,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "name": "helper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 140,
            "end": 187,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 158,
                "name": "t",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "helper",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "t",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 180,
                            "name": "slice",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 181,
                            "end": 182,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
