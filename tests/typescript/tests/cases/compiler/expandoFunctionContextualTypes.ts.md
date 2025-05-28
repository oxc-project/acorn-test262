__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 26,
        "decorators": [],
        "name": "MyComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 54,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 40,
                "end": 54,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 40,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 40,
                      "end": 45,
                      "value": "red",
                      "raw": "\"red\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 48,
                    "end": 54,
                    "literal": {
                      "type": "Literal",
                      "start": 48,
                      "end": 54,
                      "value": "blue",
                      "raw": "\"blue\""
                    }
                  }
                ]
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
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 86,
        "decorators": [],
        "name": "StatelessComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 86,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "P",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 137,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 96,
            "end": 104,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 103,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 100,
                "end": 103
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 135,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 121,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 131,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
      "start": 139,
      "end": 215,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 194,
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 176,
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 176,
                  "end": 194,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 193,
                        "decorators": [],
                        "name": "MyComponentProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 197,
            "end": 214,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "start": 203,
              "end": 214,
              "expression": {
                "type": "Literal",
                "start": 203,
                "end": 207,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 265,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 264,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 241,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 228,
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 241,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 244,
          "end": 264,
          "properties": [
            {
              "type": "Property",
              "start": 250,
              "end": 262,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 250,
                "end": 255,
                "decorators": [],
                "name": "color",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 257,
                "end": 262,
                "value": "red",
                "raw": "\"red\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
