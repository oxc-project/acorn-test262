__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Greatest",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 20
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 28
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 30,
                    "end": 31
                  },
                  "start": 30,
                  "end": 31
                },
                "start": 28,
                "end": 31
              },
              "accessibility": null,
              "static": false,
              "start": 25,
              "end": 31
            }
          ],
          "start": 23,
          "end": 33
        },
        "declare": false,
        "start": 7,
        "end": 33
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Crunch",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 53
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                },
                "start": 61,
                "end": 69
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 60,
              "end": 69
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 79,
                    "end": 85
                  },
                  "start": 77,
                  "end": 85
                },
                "body": null,
                "expression": false,
                "start": 75,
                "end": 85
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 74,
              "end": 85
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 101
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 105,
                        "end": 111
                      },
                      "start": 103,
                      "end": 111
                    },
                    "start": 102,
                    "end": 111
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 101,
                "end": 112
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 90,
              "end": 112
            }
          ],
          "start": 54,
          "end": 114
        },
        "abstract": false,
        "declare": false,
        "start": 41,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 16
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./ex",
                "raw": "'./ex'",
                "start": 17,
                "end": 23
              }
            ],
            "optional": false,
            "start": 9,
            "end": 24
          },
          "definite": false,
          "start": 4,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "crunch",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 51
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ex",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 60
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Crunch",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "optional": false,
              "computed": false,
              "start": 58,
              "end": 67
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 68,
                "end": 69
              }
            ],
            "start": 54,
            "end": 70
          },
          "definite": false,
          "start": 45,
          "end": 70
        }
      ],
      "declare": false,
      "start": 41,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "crunch",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 78
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 80
        },
        "optional": false,
        "computed": false,
        "start": 72,
        "end": 80
      },
      "directive": null,
      "start": 72,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "greatest",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 184
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrap",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 190
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "greatest",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 206
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 210
              },
              "optional": false,
              "computed": false,
              "start": 198,
              "end": 210
            },
            "directive": null,
            "start": 198,
            "end": 210
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 219
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 221
              },
              "optional": false,
              "computed": false,
              "start": 215,
              "end": 221
            },
            "directive": null,
            "start": 215,
            "end": 221
          }
        ],
        "start": 192,
        "end": 223
      },
      "expression": false,
      "start": 165,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
