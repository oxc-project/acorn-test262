__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 23,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 21,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 18,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 20,
                  "end": 21,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 34,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 32,
                "end": 34,
                "members": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 60,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 60,
                  "name": "Object",
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
          "init": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
