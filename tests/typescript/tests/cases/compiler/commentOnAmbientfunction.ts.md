__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 97,
  "end": 174,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 97,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false
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
  "start": 28,
  "end": 79,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 28,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 51,
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 65,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 55,
              "end": 65,
              "exprName": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 78,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 68,
          "end": 78,
          "exprName": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
