__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 105,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 92,
                "end": 105,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 94,
                    "end": 103,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 97,
                        "end": 103
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
  "start": 30,
  "end": 95,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 46,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "$",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 72,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 71,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 63,
                  "end": 71,
                  "exprName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "$",
                    "optional": false
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 95,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 95,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 95,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 88,
              "end": 95,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ],
        "declare": false,
        "kind": "let"
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
