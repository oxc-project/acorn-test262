__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 41,
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 41,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 20,
                "end": 41,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 21,
                  "end": 38,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 21,
                      "end": 27
                    },
                    {
                      "type": "TSArrayType",
                      "start": 30,
                      "end": 38,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 30,
                        "end": 36
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 71,
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 71,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 63,
                "end": 71,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 83,
            "end": 96,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 88,
              "end": 95,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "decorators": [],
                "name": "arr1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
