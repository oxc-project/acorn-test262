__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 18,
                  "decorators": [],
                  "name": "toString",
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
                  "end": 21,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 34,
            "decorators": [],
            "name": "b",
            "optional": false,
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
            }
          },
          "init": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 60,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 60,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 60,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
