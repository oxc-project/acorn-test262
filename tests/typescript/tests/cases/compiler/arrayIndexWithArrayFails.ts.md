__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 21,
                      "end": 27
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 30,
                        "end": 36
                      },
                      "start": 30,
                      "end": 38
                    }
                  ],
                  "start": 21,
                  "end": 38
                },
                "start": 20,
                "end": 41
              },
              "start": 18,
              "end": 41
            },
            "start": 14,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 41
        }
      ],
      "declare": true,
      "start": 0,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                },
                "start": 63,
                "end": 71
              },
              "start": 61,
              "end": 71
            },
            "start": 57,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 71
        }
      ],
      "declare": true,
      "start": 43,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 87
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr1",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 92
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 93,
                "end": 94
              },
              "optional": false,
              "computed": true,
              "start": 88,
              "end": 95
            },
            "optional": false,
            "computed": true,
            "start": 83,
            "end": 96
          },
          "definite": false,
          "start": 79,
          "end": 96
        }
      ],
      "declare": false,
      "start": 73,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
