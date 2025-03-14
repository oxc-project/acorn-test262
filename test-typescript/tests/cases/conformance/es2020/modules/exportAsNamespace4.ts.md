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
  "end": 32,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 12,
        "end": 19,
        "decorators": [],
        "name": "default",
        "optional": false
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "'./0'",
        "value": "./0"
      }
    }
  ],
  "sourceType": "module"
}
```
11.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 27,
      "end": 45,
      "declaration": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "ns",
        "optional": false
      },
      "exportKind": "value"
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
  "end": 77,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "'./1'",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 22,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 45,
        "raw": "'./11'",
        "value": "./11"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 29,
          "end": 33,
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "foo1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 53,
      "expression": {
        "type": "MemberExpression",
        "start": 47,
        "end": 52,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 61,
      "expression": {
        "type": "MemberExpression",
        "start": 54,
        "end": 60,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 69,
      "expression": {
        "type": "MemberExpression",
        "start": 63,
        "end": 68,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 77,
      "expression": {
        "type": "MemberExpression",
        "start": 70,
        "end": 76,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 70,
          "end": 74,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
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
