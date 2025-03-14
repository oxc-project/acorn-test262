__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 12,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 12,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 26,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 36,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "decorators": [],
          "name": "n",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "n",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
