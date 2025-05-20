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
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                      "raw": "\"red\"",
                      "value": "red"
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
                      "raw": "\"blue\"",
                      "value": "blue"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 26,
        "decorators": [],
        "name": "MyComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 137,
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 137,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 96,
            "end": 104,
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
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 135,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 121,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 134,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 131,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 214,
          "definite": false,
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 176,
                  "end": 194,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 193,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 193,
                        "decorators": [],
                        "name": "MyComponentProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 176,
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 197,
            "end": 214,
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "start": 203,
              "end": 214,
              "expression": {
                "type": "Literal",
                "start": 203,
                "end": 207,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 265,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 264,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 241,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 228,
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 241,
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 250,
                "end": 255,
                "decorators": [],
                "name": "color",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 257,
                "end": 262,
                "raw": "\"red\"",
                "value": "red"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
