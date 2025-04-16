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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 47,
        "value": "inner",
        "raw": "\"inner\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 75,
      "expression": {
        "type": "MemberExpression",
        "start": 49,
        "end": 74,
        "object": {
          "type": "Identifier",
          "start": 49,
          "end": 52,
          "name": "mod",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 53,
          "end": 74,
          "name": "correctVersionApplied",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 51,
              "name": "noConditionsApplied",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 54,
              "end": 58,
              "value": true,
              "raw": "true"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 37,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 29,
              "name": "noVersionApplied",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 32,
              "end": 36,
              "value": true,
              "raw": "true"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 34,
              "name": "correctVersionApplied",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 41,
              "value": true,
              "raw": "true"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 33,
              "name": "futureVersionApplied",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 36,
              "end": 40,
              "value": true,
              "raw": "true"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
