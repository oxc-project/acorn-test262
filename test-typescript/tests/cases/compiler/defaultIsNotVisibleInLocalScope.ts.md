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
        "async": false,
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
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 55,
        "end": 79,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 64,
          "end": 78,
          "exprName": {
            "type": "Identifier",
            "start": 71,
            "end": 78,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 24,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 34,
        "end": 58,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 43,
          "end": 57,
          "exprName": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
