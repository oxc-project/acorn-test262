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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 28,
                "decorators": [],
                "name": "m1",
                "optional": false
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
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "I1",
          "optional": false
        }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "decorators": [],
                "name": "m2",
                "optional": false
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
          "start": 63,
          "end": 65,
          "decorators": [],
          "name": "I2",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 144,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 99,
        "end": 144,
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
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "p1",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
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
              "name": "I2",
              "optional": false
            }
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
              "name": "I1",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 111,
          "decorators": [],
          "name": "I3",
          "optional": false
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
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "T",
                "optional": false
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
      "start": 147,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 164,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 164,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "decorators": [],
                  "name": "I3",
                  "optional": false
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
      "start": 166,
      "end": 171,
      "expression": {
        "type": "MemberExpression",
        "start": 166,
        "end": 170,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "decorators": [],
          "name": "p1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 178,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 172,
          "end": 176,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "decorators": [],
            "name": "m1",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 187,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 186,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 184,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "decorators": [],
            "name": "m2",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
