__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullable",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 24
          }
        ],
        "start": 22,
        "end": 25
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeArguments": null,
              "start": 31,
              "end": 32
            },
            "start": 29,
            "end": 32
          },
          "start": 26,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 61
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 63
                    },
                    "typeArguments": null,
                    "start": 62,
                    "end": 63
                  }
                ],
                "start": 61,
                "end": 64
              },
              "start": 50,
              "end": 64
            },
            "start": 50,
            "end": 64
          },
          "start": 35,
          "end": 64
        },
        "start": 33,
        "end": 64
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 78
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 92
                },
                "start": 75,
                "end": 92
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 99
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 104,
                  "end": 108
                },
                "start": 96,
                "end": 108
              },
              "start": 75,
              "end": 108
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 135
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Must not be a nullable value",
                        "raw": "\"Must not be a nullable value\"",
                        "start": 136,
                        "end": 166
                      }
                    ],
                    "start": 126,
                    "end": 167
                  },
                  "start": 120,
                  "end": 168
                }
              ],
              "start": 110,
              "end": 174
            },
            "alternate": null,
            "start": 71,
            "end": 174
          }
        ],
        "start": 65,
        "end": 176
      },
      "expression": false,
      "start": 0,
      "end": 176
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 204
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 204
          },
          "exportKind": "value",
          "start": 191,
          "end": 204
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 208
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserts",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./asserts",
        "raw": "\"./asserts\"",
        "start": 25,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 58,
              "end": 71
            },
            "start": 56,
            "end": 71
          },
          "start": 53,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 74,
          "end": 78
        },
        "start": 72,
        "end": 78
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "asserts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 92
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 106
                },
                "optional": false,
                "computed": false,
                "start": 85,
                "end": 106
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 110
                }
              ],
              "optional": false,
              "start": 85,
              "end": 111
            },
            "directive": null,
            "start": 85,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 120
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trim",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 125
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 117,
              "end": 127
            },
            "directive": null,
            "start": 117,
            "end": 128
          }
        ],
        "start": 79,
        "end": 130
      },
      "expression": false,
      "start": 39,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
