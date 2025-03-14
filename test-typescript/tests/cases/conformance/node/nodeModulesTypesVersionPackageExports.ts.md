__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 47,
        "raw": "\"inner\"",
        "value": "inner"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "mod",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 75,
      "expression": {
        "type": "MemberExpression",
        "start": 49,
        "end": 74,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 49,
          "end": 52,
          "decorators": [],
          "name": "mod",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 53,
          "end": 74,
          "decorators": [],
          "name": "correctVersionApplied",
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
  "start": 19,
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 51,
              "decorators": [],
              "name": "noConditionsApplied",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 54,
              "end": 58,
              "raw": "true",
              "value": true
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
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 37,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 29,
              "decorators": [],
              "name": "noVersionApplied",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 32,
              "end": 36,
              "raw": "true",
              "value": true
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
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 34,
              "decorators": [],
              "name": "correctVersionApplied",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 41,
              "raw": "true",
              "value": true
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
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 40,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 33,
              "decorators": [],
              "name": "futureVersionApplied",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 36,
              "end": 40,
              "raw": "true",
              "value": true
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
