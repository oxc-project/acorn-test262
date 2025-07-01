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
        "name": "isDefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 40
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
              "start": 41,
              "end": 42
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 42
          }
        ],
        "start": 40,
        "end": 43
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "typeArguments": null,
                  "start": 51,
                  "end": 52
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 55,
                  "end": 64
                },
                {
                  "type": "TSNullKeyword",
                  "start": 67,
                  "end": 71
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 74,
                  "end": 78
                }
              ],
              "start": 51,
              "end": 78
            },
            "start": 49,
            "end": 78
          },
          "start": 44,
          "end": 78
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
            "start": 81,
            "end": 86
          },
          "asserts": false,
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
                "start": 90,
                "end": 91
              },
              "typeArguments": null,
              "start": 90,
              "end": 91
            },
            "start": 90,
            "end": 91
          },
          "start": 81,
          "end": 91
        },
        "start": 79,
        "end": 91
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 122
                },
                "start": 103,
                "end": 122
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 131
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 136,
                  "end": 140
                },
                "start": 126,
                "end": 140
              },
              "start": 103,
              "end": 140
            },
            "start": 96,
            "end": 141
          }
        ],
        "start": 92,
        "end": 143
      },
      "expression": false,
      "start": 22,
      "end": 143
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 173,
                    "end": 182
                  }
                ],
                "start": 164,
                "end": 182
              },
              "start": 162,
              "end": 182
            },
            "start": 159,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 182
        }
      ],
      "declare": true,
      "start": 145,
      "end": 183
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 202
          }
        ],
        "optional": false,
        "start": 189,
        "end": 203
      },
      "consequent": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 216
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 220
                },
                "optional": false,
                "computed": false,
                "start": 209,
                "end": 220
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 224
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 236
                    },
                    "optional": false,
                    "computed": false,
                    "start": 221,
                    "end": 236
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 221,
                  "end": 238
                }
              ],
              "optional": false,
              "start": 209,
              "end": 239
            },
            "directive": null,
            "start": 209,
            "end": 240
          }
        ],
        "start": 205,
        "end": 243
      },
      "alternate": null,
      "start": 185,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 243
}
```
