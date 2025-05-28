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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 38,
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
            "object": {
              "type": "CallExpression",
              "start": 21,
              "end": 36,
              "callee": {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 35,
                  "value": "./ex",
                  "raw": "'./ex'"
                }
              ],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 68,
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
              "object": {
                "type": "CallExpression",
                "start": 50,
                "end": 65,
                "callee": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 58,
                    "end": 64,
                    "value": "./ex",
                    "raw": "'./ex'"
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 104,
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
            "callee": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 112,
      "expression": {
        "type": "MemberExpression",
        "start": 105,
        "end": 112,
        "object": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 107,
          "end": 112,
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 118,
      "expression": {
        "type": "MemberExpression",
        "start": 113,
        "end": 118,
        "object": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 154,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 154,
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
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 162,
      "expression": {
        "type": "MemberExpression",
        "start": 155,
        "end": 162,
        "object": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 157,
          "end": 162,
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 168,
      "expression": {
        "type": "MemberExpression",
        "start": 163,
        "end": 168,
        "object": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 168,
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 52,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 52,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 34,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 39,
              "end": 50,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
