__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "K",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 14,
        "end": 57,
        "checkType": {
          "type": "TSTypeReference",
          "start": 14,
          "end": 15,
          "typeName": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 24,
          "end": 31
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 34,
          "end": 47,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 36,
              "end": 45,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 39,
                  "end": 45
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 50,
          "end": 57
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 84,
            "name": "createDefaultExample",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 87,
            "end": 188,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 96,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "name": "K",
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
            "body": {
              "type": "BlockStatement",
              "start": 121,
              "end": 188,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 125,
                  "end": 147,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 132,
                    "end": 146,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 134,
                        "end": 138,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 135,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 137,
                          "end": 138,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 140,
                        "end": 144,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 87,
              "end": 91,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 88,
                  "end": 89,
                  "name": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "name": "K",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 117,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 99,
                "end": 117,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 105,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 102,
                      "end": 105,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 104,
                          "typeName": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 108,
                    "end": 117,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 110,
                        "end": 115,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 114,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 113,
                            "end": 114,
                            "typeName": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
