__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "S",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 50,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 23,
                "end": 50,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 23,
                  "end": 36,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 24,
                      "end": 35,
                      "name": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 34,
                        "end": 35,
                        "typeName": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
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
                    "start": 37,
                    "end": 41,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 40,
                        "end": 41,
                        "typeName": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 46,
                    "end": 50
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 76,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 64,
                      "end": 75,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 65,
                          "end": 74,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 68,
                              "end": 74
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 88,
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 80,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 81,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 82,
                "end": 86,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 85,
                  "end": 86,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
