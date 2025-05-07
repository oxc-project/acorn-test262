__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 21,
            "end": 38,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 21,
              "end": 36,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 35,
                  "raw": "'./ex'",
                  "value": "./ex",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ChainExpression",
            "start": 50,
            "end": 68,
            "expression": {
              "type": "MemberExpression",
              "start": 50,
              "end": 68,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 50,
                "end": 65,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 58,
                    "end": 64,
                    "raw": "'./ex'",
                    "value": "./ex",
                    "regex": null,
                    "bigint": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 97,
            "end": 104,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
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
      "start": 105,
      "end": 112,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 105,
        "end": 112,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 107,
          "end": 112,
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 118,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 113,
        "end": 118,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 147,
            "end": 154,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
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
      "start": 155,
      "end": 162,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 155,
        "end": 162,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 157,
          "end": 162,
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 163,
        "end": 168,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 168,
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 52,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 52,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 34,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 39,
              "end": 50,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 42,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 44,
                  "end": 50
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
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
