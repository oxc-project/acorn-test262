/mod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 19,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "as",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "raw": "0",
              "value": 0
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
      "start": 21,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 28,
        "end": 43,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 42,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 38,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 41,
              "end": 42,
              "raw": "0",
              "value": 0
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
      "start": 44,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 57,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 66,
              "decorators": [],
              "name": "something",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "raw": "0",
              "value": 0
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
/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 31,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "type",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 33,
      "end": 68,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 67,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "as",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "as",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 74,
      "expression": {
        "type": "Identifier",
        "start": 69,
        "end": 73,
        "decorators": [],
        "name": "type",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 78,
      "expression": {
        "type": "Identifier",
        "start": 75,
        "end": 77,
        "decorators": [],
        "name": "as",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 37,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "as",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 44,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "type",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 79,
      "expression": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "as",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 40,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "as",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 22,
            "decorators": [],
            "name": "as",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "type",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 82,
      "expression": {
        "type": "Identifier",
        "start": 79,
        "end": 81,
        "decorators": [],
        "name": "as",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/d.ts
```json
',' expected.
```
/e.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 42,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 24,
            "decorators": [],
            "name": "as",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 84,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 83,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 53,
          "end": 65,
          "imported": {
            "type": "Identifier",
            "start": 53,
            "end": 57,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "type",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 90,
      "expression": {
        "type": "Identifier",
        "start": 85,
        "end": 89,
        "decorators": [],
        "name": "type",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 94,
      "expression": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "as",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/f.ts
```json
Identifier expected.
```
/g.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 46,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "something",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "something",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
