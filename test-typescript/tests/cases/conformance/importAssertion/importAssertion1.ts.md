0.ts
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
  "sourceType": "module"
}
```
1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 22,
          "end": 34,
          "key": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 28,
            "end": 34,
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
      "start": 37,
      "end": 89,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 73,
          "end": 87,
          "key": {
            "type": "Literal",
            "start": 73,
            "end": 79,
            "raw": "\"type\"",
            "value": "type"
          },
          "value": {
            "type": "Literal",
            "start": 81,
            "end": 87,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 63,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 46,
          "end": 47,
          "imported": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 49,
          "end": 50,
          "imported": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 90,
      "end": 140,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 126,
          "end": 138,
          "key": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 132,
            "end": 138,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 111,
        "end": 116,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 97,
          "end": 105,
          "local": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 143,
      "expression": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 146,
      "expression": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 153,
      "expression": {
        "type": "MemberExpression",
        "start": 147,
        "end": 152,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 147,
          "end": 150,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 160,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 159,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 154,
          "end": 157,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
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
      "start": 37,
      "end": 107,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 83,
          "end": 89,
          "key": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 86,
            "end": 89,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 91,
          "end": 97,
          "key": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 94,
            "end": 97,
            "raw": "\"b\"",
            "value": "b"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 99,
          "end": 105,
          "key": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 102,
            "end": 105,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 73,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 46,
          "end": 52,
          "imported": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 54,
          "end": 60,
          "imported": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 110,
      "expression": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 113,
      "expression": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 116,
      "expression": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 119,
      "expression": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
3.ts
```json
Dynamic import requires exactly one or two arguments.
```
