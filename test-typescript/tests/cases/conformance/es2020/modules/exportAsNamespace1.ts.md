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
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "1",
              "value": 1
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
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "2",
              "value": 2
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
  "end": 39,
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
        "optional": false
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "'./0'",
        "value": "./0"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 32,
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
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 38,
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
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "b",
          "optional": false
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
        "value": "./1"
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 37,
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
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 47,
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
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 44,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
