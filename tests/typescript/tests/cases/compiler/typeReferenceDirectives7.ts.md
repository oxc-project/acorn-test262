__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 95
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 97,
                        "end": 103
                      },
                      "start": 95,
                      "end": 103
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 94,
                    "end": 103
                  }
                ],
                "start": 92,
                "end": 105
              },
              "start": 90,
              "end": 105
            },
            "start": 89,
            "end": 105
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 105
        }
      ],
      "declare": true,
      "start": 77,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 77,
  "end": 107
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "$",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 45,
              "end": 46
            },
            "definite": false,
            "start": 41,
            "end": 46
          }
        ],
        "declare": false,
        "start": 37,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 47
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "typeArguments": null,
                  "start": 63,
                  "end": 71
                },
                "start": 61,
                "end": 71
              },
              "start": 60,
              "end": 71
            },
            "init": null,
            "definite": false,
            "start": 60,
            "end": 71
          }
        ],
        "declare": false,
        "start": 56,
        "end": 72
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 49,
      "end": 72
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "id": null,
              "generator": false,
              "start": 88,
              "end": 95
            },
            "definite": false,
            "start": 84,
            "end": 95
          }
        ],
        "declare": false,
        "start": 80,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 30,
  "end": 95
}
```
