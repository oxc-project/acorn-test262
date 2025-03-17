__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "sym",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 9,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 35,
            "name": "symObj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 35,
                  "name": "Symbol",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 44,
          "name": "symObj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "name": "sym",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 52,
        "end": 64,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "name": "sym",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "name": "symObj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
