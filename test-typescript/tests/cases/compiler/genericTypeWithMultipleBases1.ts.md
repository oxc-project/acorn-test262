__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 43,
        "body": {
          "type": "TSInterfaceBody",
          "start": 20,
          "end": 43,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 26,
              "end": 41,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 28,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 30,
                  "end": 40,
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
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 53,
        "end": 89,
        "body": {
          "type": "TSInterfaceBody",
          "start": 66,
          "end": 89,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 72,
              "end": 87,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 76,
                  "end": 86,
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
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 65,
          "decorators": [],
          "name": "I2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 186,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 99,
        "end": 186,
        "body": {
          "type": "TSInterfaceBody",
          "start": 130,
          "end": 186,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 178,
              "end": 184,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 178,
                "end": 180,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 183,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 123,
            "end": 125,
            "expression": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 111,
          "decorators": [],
          "name": "I3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 111,
          "end": 114,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 112,
              "end": 113,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 206,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 206,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 198,
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 208,
        "end": 212,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 210,
          "end": 212,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 221,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 214,
        "end": 220,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 214,
          "end": 218,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 228,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
