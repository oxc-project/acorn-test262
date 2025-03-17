__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 43,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "name": "I1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 20,
          "end": 43,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 26,
              "end": 41,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 28,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 30,
                  "end": 40,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 36,
                      "end": 40
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 89,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 53,
        "end": 89,
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 65,
          "name": "I2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 66,
          "end": 89,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 72,
              "end": 87,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 76,
                  "end": 86,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 82,
                      "end": 86
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 144,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 99,
        "end": 144,
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 111,
          "name": "I3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 123,
            "end": 125,
            "expression": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 127,
            "end": 129,
            "expression": {
              "type": "Identifier",
              "start": 127,
              "end": 129,
              "name": "I1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 111,
          "end": 114,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 112,
              "end": 113,
              "name": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 130,
          "end": 144,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 136,
              "end": 142,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 138,
                "end": 141,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "T",
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
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 164,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "name": "I3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 156,
                  "end": 164,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 157,
                      "end": 163
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
      "start": 166,
      "end": 171,
      "expression": {
        "type": "MemberExpression",
        "start": 166,
        "end": 170,
        "object": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "name": "p1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 178,
        "callee": {
          "type": "MemberExpression",
          "start": 172,
          "end": 176,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 187,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 186,
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 184,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
