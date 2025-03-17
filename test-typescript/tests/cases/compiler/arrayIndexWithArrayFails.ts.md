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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 41,
            "name": "arr1",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 71,
            "name": "arr2",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 83,
            "end": 96,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "name": "arr2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 88,
              "end": 95,
              "object": {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "name": "arr1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
