__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
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
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "'X'",
              "value": "X"
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
  "end": 84,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "raw": "'./x.js'",
        "value": "./x.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 37,
            "end": 40,
            "properties": [
              {
                "type": "Property",
                "start": 38,
                "end": 39,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 51,
            "end": 55,
            "properties": [
              {
                "type": "Property",
                "start": 52,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 65,
            "decorators": [],
            "name": "x3",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 80,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 81,
                "end": 83,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 83,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 83,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
