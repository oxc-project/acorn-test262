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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 41,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 72,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 71,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 97,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 96,
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
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 88,
              "end": 95,
              "object": {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "decorators": [],
                "name": "arr1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
