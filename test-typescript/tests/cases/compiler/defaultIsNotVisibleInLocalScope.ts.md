__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 47,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 47,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 47,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 33,
              "end": 45,
              "argument": {
                "type": "Literal",
                "start": 40,
                "end": 44,
                "value": true,
                "raw": "true"
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 79,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 55,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 64,
          "end": 78,
          "exprName": {
            "type": "Identifier",
            "start": 71,
            "end": 78,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 74,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 26,
        "properties": [
          {
            "type": "Property",
            "start": 17,
            "end": 24,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 24,
              "value": true,
              "raw": "true"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 58,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 34,
        "end": 58,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 43,
          "end": 57,
          "exprName": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
