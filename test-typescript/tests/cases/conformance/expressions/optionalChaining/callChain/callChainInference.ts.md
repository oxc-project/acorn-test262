__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 201,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 108,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 40,
            "end": 76,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 43,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 44,
                  "end": 45,
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
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
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 54,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
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
              },
              {
                "type": "Identifier",
                "start": 56,
                "end": 68,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 61,
                    "end": 68,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 68,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 75,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 71,
                "end": 75
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
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
      "start": 110,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 144,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 144,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 131,
                "end": 144,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 135,
                    "end": 144
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 147,
      "end": 182,
      "test": {
        "type": "Identifier",
        "start": 151,
        "end": 156,
        "name": "value",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 158,
        "end": 182,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 164,
            "end": 180,
            "expression": {
              "type": "ChainExpression",
              "start": 164,
              "end": 179,
              "expression": {
                "type": "CallExpression",
                "start": 164,
                "end": 179,
                "callee": {
                  "type": "MemberExpression",
                  "start": 164,
                  "end": 174,
                  "object": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 169,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 175,
                    "end": 178,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 200,
      "expression": {
        "type": "ChainExpression",
        "start": 184,
        "end": 199,
        "expression": {
          "type": "CallExpression",
          "start": 184,
          "end": 199,
          "callee": {
            "type": "MemberExpression",
            "start": 184,
            "end": 194,
            "object": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 195,
              "end": 198,
              "value": "a",
              "raw": "\"a\""
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
