__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 50,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 41,
              "end": 44,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 42,
                  "end": 43,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 72,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 63,
        "end": 71,
        "literal": {
          "type": "Literal",
          "start": 63,
          "end": 71,
          "raw": "'b type'",
          "value": "b type"
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 104,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 104,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 91,
                "end": 104,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 92,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 95,
                    "end": 104
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 107,
        "end": 115,
        "expression": {
          "type": "CallExpression",
          "start": 107,
          "end": 115,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 110,
            "end": 113,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 118,
        "end": 126,
        "expression": {
          "type": "CallExpression",
          "start": 118,
          "end": 126,
          "arguments": [],
          "callee": {
            "type": "TSInstantiationExpression",
            "start": 118,
            "end": 122,
            "expression": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 119,
              "end": 122,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 120,
                  "end": 121,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          "optional": true,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
