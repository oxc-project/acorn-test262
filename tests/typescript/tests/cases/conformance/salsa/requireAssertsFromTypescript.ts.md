__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "art",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 53
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 61,
                "end": 64
              },
              "start": 59,
              "end": 64
            },
            "start": 54,
            "end": 64
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 76,
                    "end": 82
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 90
                    },
                    "typeArguments": null,
                    "start": 85,
                    "end": 90
                  }
                ],
                "start": 76,
                "end": 90
              },
              "start": 74,
              "end": 90
            },
            "start": 66,
            "end": 90
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 106
            },
            "asserts": true,
            "typeAnnotation": null,
            "start": 93,
            "end": 106
          },
          "start": 91,
          "end": 106
        },
        "body": null,
        "expression": false,
        "start": 41,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 107
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "art",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            },
            "start": 26,
            "end": 31
          },
          "start": 21,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 57
                  },
                  "typeArguments": null,
                  "start": 52,
                  "end": 57
                }
              ],
              "start": 43,
              "end": 57
            },
            "start": 41,
            "end": 57
          },
          "start": 33,
          "end": 57
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 60,
          "end": 73
        },
        "start": 58,
        "end": 73
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "art",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 87
      },
      "start": 75,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "art",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 11
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "art",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 11
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 11
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./ex",
                "raw": "'./ex'",
                "start": 24,
                "end": 30
              }
            ],
            "optional": false,
            "start": 16,
            "end": 31
          },
          "definite": false,
          "start": 6,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
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
            "name": "artoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 43
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 53
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./ex2",
                "raw": "'./ex2'",
                "start": 54,
                "end": 61
              }
            ],
            "optional": false,
            "start": 46,
            "end": 62
          },
          "definite": false,
          "start": 38,
          "end": 62
        }
      ],
      "declare": false,
      "start": 32,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 71,
            "end": 72
          },
          "definite": false,
          "start": 67,
          "end": 72
        }
      ],
      "declare": false,
      "start": 63,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "art",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          }
        ],
        "optional": false,
        "start": 73,
        "end": 79
      },
      "directive": null,
      "start": 73,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 88,
            "end": 89
          },
          "definite": false,
          "start": 84,
          "end": 89
        }
      ],
      "declare": false,
      "start": 80,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "artoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          }
        ],
        "optional": false,
        "start": 90,
        "end": 98
      },
      "directive": null,
      "start": 90,
      "end": 98
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
