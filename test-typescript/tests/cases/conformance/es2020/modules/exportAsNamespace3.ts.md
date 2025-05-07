__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "end": 73,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 12,
        "end": 14,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 27,
        "end": 31,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 27,
          "end": 29,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 37,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 33,
          "end": 35,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 45,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 48,
            "end": 60,
            "properties": [
              {
                "type": "Property",
                "start": 49,
                "end": 53,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 52,
                  "end": 53,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 55,
                "end": 59,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 59,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 61,
        "end": 65,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 61,
          "end": 63,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 67,
        "end": 71,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "decorators": [],
          "name": "b",
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
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "'./1'",
        "value": "./1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
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
      "start": 28,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 36,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 28,
          "end": 34,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 38,
        "end": 46,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 38,
          "end": 44,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 44,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "b",
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
