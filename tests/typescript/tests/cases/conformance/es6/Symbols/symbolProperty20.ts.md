__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 59,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 19,
              "end": 34,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 34,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 58,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 37,
                "end": 58,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 39,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 41,
                        "end": 47
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 64,
            "end": 104,
            "key": {
              "type": "MemberExpression",
              "start": 65,
              "end": 83,
              "object": {
                "type": "Identifier",
                "start": 65,
                "end": 71,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 83,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 85,
                "end": 94,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 94,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 97,
                "end": 103
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 195,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 116,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 119,
            "end": 195,
            "properties": [
              {
                "type": "Property",
                "start": 125,
                "end": 150,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 126,
                  "end": 141,
                  "object": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 132,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 141,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 144,
                  "end": 150,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 156,
                "end": 193,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 157,
                  "end": 175,
                  "object": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 163,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 175,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 176,
                  "end": 193,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 180,
                    "end": 193,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 182,
                        "end": 191,
                        "argument": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 190,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
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
