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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 105,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "$",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 72,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 72,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 71,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 95,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 95,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 88,
              "end": 95,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
