__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 62
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 56,
          "end": 70
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 76
              },
              "value": {
                "type": "Literal",
                "value": "no",
                "raw": "'no'",
                "start": 78,
                "end": 82
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 75,
              "end": 82
            }
          ],
          "start": 73,
          "end": 84
        },
        "start": 56,
        "end": 84
      },
      "directive": null,
      "start": 56,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 86
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 15
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "z",
                "raw": "'z'",
                "start": 16,
                "end": 19
              }
            ],
            "optional": false,
            "start": 8,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 35,
                  "end": 40
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 32,
                "end": 40
              }
            ],
            "start": 30,
            "end": 42
          },
          "definite": false,
          "start": 26,
          "end": 42
        }
      ],
      "declare": false,
      "start": 22,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 50
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 58
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 58
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "start": 44,
        "end": 62
      },
      "directive": null,
      "start": 44,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "shortid",
        "raw": "\"shortid\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      },
                      "start": 43,
                      "end": 51
                    },
                    "start": 42,
                    "end": 51
                  },
                  "init": null,
                  "definite": false,
                  "start": 42,
                  "end": 51
                }
              ],
              "declare": false,
              "start": 38,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 31,
            "end": 52
          }
        ],
        "start": 25,
        "end": 54
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 60
          },
          "start": 52,
          "end": 60
        }
      ],
      "source": {
        "type": "Literal",
        "value": "shortid",
        "raw": "\"shortid\"",
        "start": 66,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 80
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "optional": false,
        "computed": false,
        "start": 77,
        "end": 82
      },
      "directive": null,
      "start": 77,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 109
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 111
        },
        "optional": false,
        "computed": false,
        "start": 106,
        "end": 111
      },
      "directive": null,
      "start": 106,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 145
}
```
