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
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 20,
          "end": 32,
          "key": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 26,
            "end": 32,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 12,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 85,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 69,
          "end": 83,
          "key": {
            "type": "Literal",
            "start": 69,
            "end": 75,
            "raw": "\"type\"",
            "value": "type"
          },
          "value": {
            "type": "Literal",
            "start": 77,
            "end": 83,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 61,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 44,
          "end": 45,
          "imported": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 134,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 120,
          "end": 132,
          "key": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 126,
            "end": 132,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 107,
        "end": 112,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 93,
          "end": 101,
          "local": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 137,
      "expression": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 140,
      "expression": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 147,
      "expression": {
        "type": "MemberExpression",
        "start": 141,
        "end": 146,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 141,
          "end": 144,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 154,
      "expression": {
        "type": "MemberExpression",
        "start": 148,
        "end": 153,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 151,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
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
  "end": 115,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 103,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 79,
          "end": 85,
          "key": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 82,
            "end": 85,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 87,
          "end": 93,
          "key": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 93,
            "raw": "\"b\"",
            "value": "b"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 95,
          "end": 101,
          "key": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 98,
            "end": 101,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 71,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 44,
          "end": 50,
          "imported": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 106,
      "expression": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 109,
      "expression": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 112,
      "expression": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 115,
      "expression": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Dynamic import requires exactly one or two arguments.
```
