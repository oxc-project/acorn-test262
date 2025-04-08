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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
        "name": "foobar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 65,
          "name": "a",
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
