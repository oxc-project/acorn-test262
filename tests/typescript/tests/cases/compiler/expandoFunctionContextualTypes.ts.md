__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 26
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "red",
                      "raw": "\"red\"",
                      "start": 40,
                      "end": 45
                    },
                    "start": 40,
                    "end": 45
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "blue",
                      "raw": "\"blue\"",
                      "start": 48,
                      "end": 54
                    },
                    "start": 48,
                    "end": 54
                  }
                ],
                "start": 40,
                "end": 54
              },
              "start": 38,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 54
          }
        ],
        "start": 27,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StatelessComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 86
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 87,
            "end": 88
          }
        ],
        "start": 86,
        "end": 89
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 100,
                "end": 103
              },
              "start": 98,
              "end": 103
            },
            "start": 96,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 131
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 133
                      },
                      "typeArguments": null,
                      "start": 132,
                      "end": 133
                    }
                  ],
                  "start": 131,
                  "end": 134
                },
                "start": 124,
                "end": 134
              },
              "start": 122,
              "end": 134
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 135
          }
        ],
        "start": 90,
        "end": 137
      },
      "declare": false,
      "start": 58,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 176
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyComponentProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 193
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 193
                    }
                  ],
                  "start": 176,
                  "end": 194
                },
                "start": 158,
                "end": 194
              },
              "start": 156,
              "end": 194
            },
            "start": 145,
            "end": 194
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 203,
                "end": 207
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              },
              "start": 203,
              "end": 214
            },
            "id": null,
            "generator": false,
            "start": 197,
            "end": 214
          },
          "definite": false,
          "start": 145,
          "end": 214
        }
      ],
      "declare": false,
      "start": 139,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 228
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 241
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "color",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 255
              },
              "value": {
                "type": "Literal",
                "value": "red",
                "raw": "\"red\"",
                "start": 257,
                "end": 262
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 250,
              "end": 262
            }
          ],
          "start": 244,
          "end": 264
        },
        "start": 217,
        "end": 264
      },
      "directive": null,
      "start": 217,
      "end": 265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 265
}
```
