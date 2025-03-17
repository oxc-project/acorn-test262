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
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 105,
            "name": "$",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 97,
                        "end": 103
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "$",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 72,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 72,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 71,
              "name": "x",
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
                    "name": "$",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 95,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 95,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 88,
              "end": 95,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "let",
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
