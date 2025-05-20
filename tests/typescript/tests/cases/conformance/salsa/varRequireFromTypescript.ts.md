__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 33,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "Greatest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 23,
          "end": 33,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 31,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 28,
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 30,
                  "end": 31,
                  "literal": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 114,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 54,
          "end": 114,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 60,
              "end": 69,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 74,
              "end": 85,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 75,
                "end": 85,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 79,
                    "end": 85
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 90,
              "end": 112,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 90,
                "end": 101,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 101,
                "end": 112,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 102,
                    "end": 111,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 105,
                        "end": 111
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 53,
          "decorators": [],
          "name": "Crunch",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
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
  "end": 223,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9,
            "end": 24,
            "arguments": [
              {
                "type": "Literal",
                "start": 17,
                "end": 23,
                "raw": "'./ex'",
                "value": "./ex"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 9,
              "end": 16,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "crunch",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 54,
            "end": 70,
            "arguments": [
              {
                "type": "Literal",
                "start": 68,
                "end": 69,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 58,
              "end": 67,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 58,
                "end": 60,
                "decorators": [],
                "name": "ex",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Crunch",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 72,
        "end": 80,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "decorators": [],
          "name": "crunch",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 165,
      "end": 223,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 223,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 210,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 198,
              "end": 210,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 198,
                "end": 206,
                "decorators": [],
                "name": "greatest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 207,
                "end": 210,
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 215,
            "end": 221,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 215,
              "end": 221,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 215,
                "end": 219,
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 176,
          "end": 184,
          "decorators": [],
          "name": "greatest",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 186,
          "end": 190,
          "decorators": [],
          "name": "wrap",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
