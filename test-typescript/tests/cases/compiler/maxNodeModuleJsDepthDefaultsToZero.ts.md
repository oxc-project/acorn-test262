__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 86,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 56,
          "end": 70,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 73,
          "end": 84,
          "properties": [
            {
              "type": "Property",
              "start": 75,
              "end": 82,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 78,
                "end": 82,
                "raw": "'no'",
                "value": "no",
                "regex": null,
                "bigint": null
              }
            }
          ]
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
  "end": 64,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 20,
            "arguments": [
              {
                "type": "Literal",
                "start": 16,
                "end": 19,
                "raw": "'z'",
                "value": "z",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 15,
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
      "start": 22,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 30,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 32,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 40,
                  "raw": "'foo'",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 62,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 58,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "y",
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
  "end": 55,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 54,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 52,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 38,
              "end": 52,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 51,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"shortid\"",
        "value": "shortid",
        "regex": null,
        "bigint": null
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
  "start": 45,
  "end": 145,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 75,
        "raw": "\"shortid\"",
        "value": "shortid",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 60,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 82,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 111,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 106,
        "end": 111,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 106,
          "end": 109,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "decorators": [],
          "name": "y",
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
