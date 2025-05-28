__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 20,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 20,
        "test": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "consequent": {
          "type": "Identifier",
          "start": 4,
          "end": 5,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 8,
          "end": 20,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 15,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 14,
              "end": 15,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "body": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "id": null,
          "generator": false
        }
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
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 20,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 20,
        "test": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "consequent": {
          "type": "Identifier",
          "start": 4,
          "end": 5,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 8,
          "end": 20,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 15,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 14,
              "end": 15,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "body": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
