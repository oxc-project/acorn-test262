__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 41,
        "end": 107,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 53,
          "decorators": [],
          "name": "art",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 54,
            "end": 64,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              }
            }
          },
          {
            "type": "Identifier",
            "start": 66,
            "end": 90,
            "decorators": [],
            "name": "message",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 90,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 76,
                "end": 90,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 76,
                    "end": 82
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 90,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 90,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 91,
          "end": 106,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 93,
            "end": 106,
            "asserts": true,
            "parameterName": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 88,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 74,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "art",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 57,
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 57,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 43,
              "end": 57,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 57,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 57,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 73,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 60,
          "end": 73,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 75,
      "end": 88,
      "expression": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "art",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 13,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 11,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 11,
                  "decorators": [],
                  "name": "art",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 11,
                  "decorators": [],
                  "name": "art",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 16,
            "end": 31,
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 30,
                "raw": "'./ex'",
                "value": "./ex",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 16,
              "end": 23,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 43,
            "decorators": [],
            "name": "artoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 46,
            "end": 62,
            "arguments": [
              {
                "type": "Literal",
                "start": 54,
                "end": 61,
                "raw": "'./ex2'",
                "value": "./ex2",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 71,
            "end": 72,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 79,
        "arguments": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "art",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 98,
        "arguments": [
          {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 90,
          "end": 95,
          "decorators": [],
          "name": "artoo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
