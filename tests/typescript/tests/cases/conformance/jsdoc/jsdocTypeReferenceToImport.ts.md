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
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./ex",
                  "raw": "'./ex'",
                  "start": 29,
                  "end": 35
                }
              ],
              "optional": false,
              "start": 21,
              "end": 36
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "optional": false,
            "computed": false,
            "start": 21,
            "end": 38
          },
          "definite": false,
          "start": 17,
          "end": 38
        }
      ],
      "declare": false,
      "start": 11,
      "end": 39
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
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 57
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "./ex",
                    "raw": "'./ex'",
                    "start": 58,
                    "end": 64
                  }
                ],
                "optional": false,
                "start": 50,
                "end": 65
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "optional": true,
              "computed": false,
              "start": 50,
              "end": 68
            },
            "start": 50,
            "end": 68
          },
          "definite": false,
          "start": 46,
          "end": 68
        }
      ],
      "declare": false,
      "start": 40,
      "end": 69
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "start": 97,
            "end": 104
          },
          "definite": false,
          "start": 93,
          "end": 104
        }
      ],
      "declare": false,
      "start": 89,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 106
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 112
        },
        "optional": false,
        "computed": false,
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "optional": false,
        "computed": false,
        "start": 113,
        "end": 118
      },
      "directive": null,
      "start": 113,
      "end": 118
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 144
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            },
            "typeArguments": null,
            "arguments": [],
            "start": 147,
            "end": 154
          },
          "definite": false,
          "start": 143,
          "end": 154
        }
      ],
      "declare": false,
      "start": 139,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "start",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 162
        },
        "optional": false,
        "computed": false,
        "start": 155,
        "end": 162
      },
      "directive": null,
      "start": 155,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "end",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 168
        },
        "optional": false,
        "computed": false,
        "start": 163,
        "end": 168
      },
      "directive": null,
      "start": 163,
      "end": 168
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 169
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "start",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 26
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                },
                "start": 26,
                "end": 34
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
              "start": 21,
              "end": 34
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 42
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 44,
                  "end": 50
                },
                "start": 42,
                "end": 50
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
              "start": 39,
              "end": 50
            }
          ],
          "start": 15,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
