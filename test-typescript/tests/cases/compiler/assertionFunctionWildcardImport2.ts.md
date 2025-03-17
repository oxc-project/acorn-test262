__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 22,
        "name": "isNonNullable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 32,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 32,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 176,
        "body": [
          {
            "type": "IfStatement",
            "start": 71,
            "end": 174,
            "test": {
              "type": "LogicalExpression",
              "start": 75,
              "end": 108,
              "left": {
                "type": "BinaryExpression",
                "start": 75,
                "end": 92,
                "left": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 78,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 92,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 96,
                "end": 108,
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 104,
                  "end": 108,
                  "value": null,
                  "raw": "null"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 110,
              "end": 174,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 120,
                  "end": 168,
                  "argument": {
                    "type": "NewExpression",
                    "start": 126,
                    "end": 167,
                    "callee": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 135,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 136,
                        "end": 166,
                        "value": "Must not be a nullable value",
                        "raw": "\"Must not be a nullable value\""
                      }
                    ],
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 64,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 35,
          "end": 64,
          "parameterName": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 64,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 64,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 61,
                "name": "NonNullable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 61,
                "end": 64,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 178,
      "end": 207,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 191,
          "end": 204,
          "local": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "name": "isNonNullable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "name": "isNonNullable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 19,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "name": "asserts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 36,
        "value": "./asserts",
        "raw": "\"./asserts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 71,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 71,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 58,
              "end": 71,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 58,
                  "end": 64
                },
                {
                  "type": "TSNullKeyword",
                  "start": 67,
                  "end": 71
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 130,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 112,
            "expression": {
              "type": "CallExpression",
              "start": 85,
              "end": 111,
              "callee": {
                "type": "MemberExpression",
                "start": 85,
                "end": 106,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "name": "asserts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 106,
                  "name": "isNonNullable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 110,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 128,
            "expression": {
              "type": "CallExpression",
              "start": 117,
              "end": 127,
              "callee": {
                "type": "MemberExpression",
                "start": 117,
                "end": 125,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 120,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 125,
                  "name": "trim",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 78,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 74,
          "end": 78
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
