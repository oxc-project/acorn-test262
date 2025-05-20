__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 83,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 64,
            "end": 81,
            "argument": {
              "type": "Identifier",
              "start": 71,
              "end": 80,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 53,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 56,
          "end": 57,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 47,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 23,
              "end": 47,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 25,
                  "end": 45,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 27,
                      "end": 36,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 28,
                        "end": 36,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 30,
                          "end": 36
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "type": "ExpressionStatement",
      "start": 85,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 118,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 89,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 91,
                "end": 115,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 92,
                  "end": 115,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 96,
                    "end": 115,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 98,
                        "end": 113,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 105,
                          "end": 113,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 113,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 85,
          "end": 88,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
