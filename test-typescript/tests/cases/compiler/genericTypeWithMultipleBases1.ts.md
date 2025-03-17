__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
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
      "end": 186,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 99,
        "end": 186,
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
              "name": "I1",
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
              "name": "I2",
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
          "end": 186,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 178,
              "end": 184,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 178,
                "end": 180,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
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
      "start": 189,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 206,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 206,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 198,
                  "name": "I3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 198,
                  "end": 206,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 199,
                      "end": 205
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
      "start": 208,
      "end": 213,
      "expression": {
        "type": "MemberExpression",
        "start": 208,
        "end": 212,
        "object": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 210,
          "end": 212,
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
      "start": 214,
      "end": 221,
      "expression": {
        "type": "CallExpression",
        "start": 214,
        "end": 220,
        "callee": {
          "type": "MemberExpression",
          "start": 214,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
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
      "start": 222,
      "end": 229,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 228,
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
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
